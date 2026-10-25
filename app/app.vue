<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://blog.skyfelis.jp'

const canonicalUrl = computed(() => {
  const path = route.path === '/'
    ? '/'
    : `${route.path.replace(/\/+$/, '')}/`

  return new URL(path, siteUrl).toString()
})

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: '潮の香りのする猫の足跡 RSS',
      href: `${siteUrl}/feed.xml`
    }
  ]
}))

useSeoMeta({
  ogUrl: canonicalUrl
})
</script>