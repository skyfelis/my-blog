const siteUrl = 'https://blog.skyfelis.jp'
const feedUrl = `${siteUrl}/feed.xml`

const xmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
}

function escapeXml(value: string) {
    return value.replace(
        /[&<>"']/g,
        character => xmlEntities[character] ?? character
    )
}

function parsePublishedDate(value: string) {
    const trimmedValue = value.trim()

    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmedValue)) {
        return new Date(`${trimmedValue}T00:00:00+09:00`)
    }

    const normalizedValue = trimmedValue.replace(' ', 'T')
    const hasTimezone = /(?:Z|[+-]\d{2}:?\d{2})$/.test(normalizedValue)

    return new Date(
        hasTimezone
            ? normalizedValue
            : `${normalizedValue}+09:00`
    )
}

export default defineEventHandler(async (event) => {
    const posts = await queryCollection(event, 'content')
        .select('title', 'description', 'date', 'path')
        .order('date', 'DESC')
        .limit(20)
        .all()

    const items = posts.map((post) => {
        const articlePath = post.path === '/'
            ? '/'
            : `${post.path.replace(/\/+$/, '')}/`

        const articleUrl = new URL(articlePath, siteUrl).toString()
        const publishedAt = parsePublishedDate(post.date)

        return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(articleUrl)}</link>
      <guid isPermaLink="true">${escapeXml(articleUrl)}</guid>
      <pubDate>${publishedAt.toUTCString()}</pubDate>
      <description>${escapeXml(post.description ?? '')}</description>
    </item>`
    }).join('\n')

    const latestPost = posts[0]

    const lastBuildDate = latestPost
        ? parsePublishedDate(latestPost.date).toUTCString()
        : new Date().toUTCString()
    setResponseHeader(
        event,
        'content-type',
        'application/rss+xml; charset=utf-8'
    )

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>潮の香りのする猫の足跡</title>
    <link>${siteUrl}/</link>
    <description>汐猫みおのブログ・日常の記録</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`
})