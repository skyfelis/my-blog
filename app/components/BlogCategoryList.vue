<!-- components/BlogCategoryList.vue -->
<template>
    <div class="space-y-3">
        <h3 class="font-bold text-lg text-slate-800 flex items-center gap-2">
            <span class="w-1.5 h-4 bg-sky-400 rounded-full"></span>
            カテゴリー
        </h3>

        <!-- 読み込み中表示 -->
        <div v-if="pending && !posts?.length" class="text-xs text-slate-400 animate-pulse">
            読み込み中...
        </div>

        <div v-else class="space-y-2 text-sm">
            <details v-for="(children, parent) in categoryTree" :key="parent" open class="group">
                <summary
                    class="font-semibold text-slate-700 cursor-pointer list-none flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-sky-50 hover:text-sky-600 transition-colors">
                    <span class="flex items-center gap-1.5">
                        <svg class="w-3.5 h-3.5 text-slate-400 transition-transform group-open:rotate-90 group-open:text-sky-500"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        {{ parent }}
                    </span>
                </summary>

                <ul class="ml-4 pl-3 border-l-2 border-sky-100 space-y-1 mt-1">
                    <li v-for="child in children" :key="child">
                        <NuxtLink :to="{ path: '/', query: { category: parent, subCategory: child } }"
                            class="text-slate-500 hover:text-sky-600 transition-colors block py-1 px-2 rounded hover:bg-sky-50/60">
                            {{ child }}
                        </NuxtLink>
                    </li>
                </ul>
            </details>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: posts, pending, refresh } = useAsyncData('all-categories', () => {
    return queryCollection('content').all()
}, { lazy: true })

onMounted(() => {
    if (!posts.value || posts.value.length === 0) {
        refresh()
    }
})

const categoryTree = computed(() => {
    const tree: Record<string, Set<string>> = {
        '同人活動': new Set(['寄稿', '個人サークル'])
    }

    for (const post of posts.value ?? []) {
        const parent = post.category?.parent
        const child = post.category?.child

        if (parent && child) {
            if (!tree[parent]) {
                tree[parent] = new Set()
            }
            tree[parent].add(child)
        }
    }

    return Object.fromEntries(
        Object.entries(tree).map(([parent, childrenSet]) => [parent, Array.from(childrenSet)])
    )
})
</script>