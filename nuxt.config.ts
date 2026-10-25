// nuxt.config.ts
export default defineNuxtConfig({
  site: {
    url: 'https://blog.skyfelis.jp',
    name: '潮の香りのする猫の足跡',
    trailingSlash: true
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-og-image',
    '@nuxt/fonts',
  ],

  nitro: {
    preset: 'cloudflare_module',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/feed.xml']
    }
  },

  ogImage: {
    enabled: true,
    zeroRuntime: true,
    runtimeCacheStorage: false
  },

  sitemap: {
    zeroRuntime: true,
    exclude: [
      '/avatar.webp',
      '/feed.xml'
    ]
  },

  devtools: { enabled: true },
  compatibilityDate: '2026-07-29',

  // Nuxt Content v3 の設定
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        },
        highlight: {
          theme: 'github-light'
        }
      }
    },

    renderer: {
      anchorLinks: false
    }
  },

  runtimeConfig: {
    uploadApiKey: process.env.NUXT_UPLOAD_API_KEY
  },

  fonts: {
    families: [
      {
        name: 'Noto Sans JP',
        src: '/fonts/NotoSansJP-Regular.woff2',
        weight: 400,
        style: 'normal',
        global: true
      },
      {
        name: 'Noto Sans JP',
        src: '/fonts/NotoSansJP-Bold.woff2',
        weight: 700,
        style: 'normal',
        global: true
      }
    ]
  },

  hooks: {
    'pages:extend'(pages) {
      if (process.env.NODE_ENV === 'production') {
        const filteredPages = pages.filter(p => !p.path?.startsWith('/admin'))
        pages.length = 0
        pages.push(...filteredPages)
      }
    }
  },
})
