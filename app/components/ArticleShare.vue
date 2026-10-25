<template>
    <section class="mt-16 border-t border-slate-300 pt-6" aria-labelledby="article-share-heading">
        <div class="grid gap-5 sm:grid-cols-[10rem_1fr] sm:items-start">
            <div>
                <p class="font-mono text-[10px] tracking-[0.22em] text-[#5A98D8]">
                    SHARE THIS NOTE
                </p>

                <h2 id="article-share-heading" class="mt-1 text-sm font-medium text-slate-700">
                    この記事を共有
                </h2>
            </div>

            <div class="flex flex-wrap gap-x-6 gap-y-4 text-sm sm:justify-end">
                <!-- X -->
                <a :href="xShareUrl" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 border-b border-slate-400 pb-1 text-slate-600 transition-colors hover:border-[#5A98D8] hover:text-[#5A98D8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A98D8]">
                    <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X</span>
                </a>

                <!-- Bluesky -->
                <a :href="blueskyShareUrl" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 border-b border-slate-400 pb-1 text-slate-600 transition-colors hover:border-[#5A98D8] hover:text-[#5A98D8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A98D8]">
                    <svg aria-hidden="true" class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026" />
                    </svg>
                    <span>Bluesky</span>
                </a>

                <!-- はてなブックマーク -->
                <a :href="hatenaBookmarkUrl" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 border-b border-slate-400 pb-1 text-slate-600 transition-colors hover:border-[#5A98D8] hover:text-[#5A98D8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A98D8]">
                    <span
                        class="inline-flex h-4 w-4 items-center justify-center font-sans text-[11px] font-bold leading-none"
                        aria-hidden="true">
                        B!
                    </span>
                    <span>はてなブックマーク</span>
                </a>

                <!-- URLコピー -->
                <button type="button"
                    class="inline-flex items-center gap-1.5 border-b border-slate-400 pb-1 text-slate-600 transition-colors hover:border-[#5A98D8] hover:text-[#5A98D8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A98D8]"
                    @click="copyUrl">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        aria-hidden="true">
                        <rect x="9" y="9" width="12" height="12" rx="1" />
                        <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                    </svg>
                    <span>{{ copied ? 'コピーしました' : 'URLをコピー' }}</span>
                </button>

                <!-- 端末の共有機能 -->
                <ClientOnly>
                    <button v-if="canShare" type="button"
                        class="inline-flex items-center gap-1.5 border-b border-slate-400 pb-1 text-slate-600 transition-colors hover:border-[#5A98D8] hover:text-[#5A98D8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A98D8]"
                        @click="shareWithDevice">
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            aria-hidden="true">
                            <path d="M12 15V3" />
                            <path d="M7 8l5-5 5 5" />
                            <path d="M5 12v8h14v-8" />
                        </svg>
                        <span>端末で共有</span>
                    </button>
                </ClientOnly>
            </div>
        </div>

        <p class="sr-only" aria-live="polite">
            {{ copied ? '記事のURLをコピーしました' : '' }}
        </p>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    path: string
}>()

const siteUrl = 'https://blog.skyfelis.jp'
const copied = ref(false)
const canShare = ref(false)

const articleUrl = computed(() => {
    return new URL(props.path, siteUrl).toString()
})

const xShareUrl = computed(() => {
    const params = new URLSearchParams({
        text: props.title,
        url: articleUrl.value
    })

    return `https://twitter.com/intent/tweet?${params.toString()}`
})

const blueskyShareUrl = computed(() => {
    const params = new URLSearchParams({
        text: `${props.title}\n${articleUrl.value}`
    })

    return `https://bsky.app/intent/compose?${params.toString()}`
})

const hatenaBookmarkUrl = computed(() => {
    const entryUrl = articleUrl.value.replace(/^https:\/\//, '')
    return `https://b.hatena.ne.jp/entry/s/${entryUrl}`
})

let copyResetTimer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
    canShare.value = typeof navigator.share === 'function'
})

onBeforeUnmount(() => {
    if (copyResetTimer) {
        clearTimeout(copyResetTimer)
    }
})

async function copyUrl() {
    try {
        await navigator.clipboard.writeText(articleUrl.value)
    } catch {
        const textarea = document.createElement('textarea')
        textarea.value = articleUrl.value
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
    }

    copied.value = true

    if (copyResetTimer) {
        clearTimeout(copyResetTimer)
    }

    copyResetTimer = setTimeout(() => {
        copied.value = false
    }, 2000)
}

async function shareWithDevice() {
    try {
        await navigator.share({
            title: props.title,
            text: props.title,
            url: articleUrl.value
        })
    } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
            console.error('記事を共有できませんでした', error)
        }
    }
}
</script>