# Nuxt Content Starter

Look at the [Nuxt Content documentation](https://content.nuxt.com) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```


## 記事の作成と公開

### 1. Markdownファイルを作成する

記事は `content/YYYY/MM/` 以下にMarkdown形式で作成します。

```text
content/2026/08/10-example.md
```

front matterは次の形式で記述します。

```yaml
---
title: 記事タイトル
date: "2026-08-10 12:00"
category:
  parent: 技術
  child: ブログ
description: 記事の概要
---

ここから記事本文です。
```

### 2. ローカルで表示を確認する

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開き、記事一覧と記事ページを確認します。

### 3. 公開用ファイルを生成する

pushする前に静的生成が成功することを確認します。

```bash
npm run generate
```

ルーティングや生成結果がおかしい場合は、Nuxtのキャッシュを削除して再実行します。

```bash
npx nuxt cleanup
npm run generate
```

### 4. GitHubへpushする

```bash
git add content/
git commit -m "Add 記事タイトル"
git push
```

GitHubへのpush後、Cloudflareで自動的にビルド・公開されます。

## OGP画像

トップページおよび各記事のOGP画像は、デプロイ時に自動生成されます。記事ごとの画像には、Markdownの次の情報が反映されます。

* 記事タイトル
* カテゴリ
* 著者名
* 公開日時

記事ごとにOGP画像を手動で作成する必要はありません。

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## 同人活動の記事

寄稿した作品や自分のサークルの作品は、親カテゴリを `同人活動` にして通常の記事と同じように投稿します。
子カテゴリは `寄稿` または `個人サークル` を指定します。この2つのカテゴリは記事がまだなくてもサイドバーに表示されます。

`content/YYYY/MM/DD-work-name.md` に、次の書式で記事を作成してください。
山括弧の項目は実際の情報に置き換え、未定の項目は削除します。

```markdown
---
title: "<作品名・告知タイトル>"
date: "YYYY-MM-DD HH:mm"
category:
  parent: 同人活動
  child: 寄稿
description: "<作品と参加内容の短い紹介>"
---

## 作品について

<作品名、発行サークル、内容の紹介>

## 寄稿内容

<担当した記事・作品のタイトルと紹介>

## 頒布・通販

<参加イベント、頒布日、スペース番号、通販リンクなど>
```

自分のサークルの作品は `child: 個人サークル` に変更し、「寄稿内容」の見出しを「制作について」などに変更してください。
表紙画像がある場合は、アップロード画面で取得したMarkdown形式の画像リンクを本文に追加できます。
