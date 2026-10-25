// server/api/upload.post.ts
import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export default defineEventHandler(async (event) => {
  // 本番環境ガード
  if (!process.dev) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }

  // 1. API Key チェック
  const apiKey = getHeader(event, 'x-api-key')
  const config = useRuntimeConfig(event)
  if (!apiKey || apiKey !== config.uploadApiKey) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  // 2. リクエストボディを取得
  const body = await readBody(event)
  const contentType = body?.contentType || 'image/webp'
  const extension = contentType.includes('webp') ? 'webp' : 'png'

  // 3. S3 Client の初期化
  const accountId = process.env.R2_ACCOUNT_ID
  const bucketName = 'my-blog-assets' // ご自身のバケット名

  const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
    },
  })

  // 📅 今日の日付（YYYY-MM-DD）を取得
  const today = new Date().toISOString().split('T')[0] // 例: "2026-07-29"
  const prefix = `posts/${today}-`

  // 🔍 本日アップロード済みのファイル一覧を取得してカウント（何番目かを特定）
  const listCommand = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: prefix,
  })

  const existingObjects = await s3.send(listCommand)
  const count = (existingObjects.Contents?.length || 0) + 1

  // 📝 最終的なファイルパスを作成 (例: posts/2026-07-29-1.webp)
  const key = `${prefix}${count}.${extension}`

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    ContentType: contentType,
  })

  // 4. 署名付きURLの発行
  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 600 })
  const publicUrl = `https://blog-asset.skyfelis.jp/${key}` // ご自身のドメイン

  return {
    uploadUrl,
    publicUrl,
    markdown: `![${today}-${count}](${publicUrl})`
  }
})