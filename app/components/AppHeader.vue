<template>
    <header class="border-b border-slate-300/80 bg-[#FAFAFA]">
        <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 py-5 sm:px-6">
            <NuxtLink to="/" class="group whitespace-nowrap">
                <div class="flex items-center gap-2">
                    <svg aria-hidden="true" class="h-4 w-4 text-[#5A98D8]" viewBox="0 0 24 24" fill="currentColor">
                        <ellipse cx="7" cy="6.5" rx="2.1" ry="2.7" transform="rotate(-25 7 6.5)" />
                        <ellipse cx="12" cy="5.2" rx="2.1" ry="2.7" />
                        <ellipse cx="17" cy="6.5" rx="2.1" ry="2.7" transform="rotate(25 17 6.5)" />
                        <ellipse cx="19" cy="11" rx="1.8" ry="2.4" transform="rotate(25 19 11)" />
                        <path
                            d="M12 10.2c-4.3 0-7 3.4-7 6.6 0 2.1 1.5 3.2 3.4 3.2 1.2 0 2.3-.7 3.6-.7s2.4.7 3.6.7c1.9 0 3.4-1.1 3.4-3.2 0-3.2-2.7-6.6-7-6.6Z" />
                    </svg>

                    <span class="text-xs font-semibold tracking-[0.22em] text-[#5A98D8]">
                        SKYFELIS
                    </span>
                </div>
                <span
                    class="mt-0.5 block text-base font-semibold tracking-[0.03em] text-slate-900 transition-colors group-hover:text-[#5A98D8] sm:text-lg">
                    潮の香りのする猫の足跡
                </span>
            </NuxtLink>

            <button type="button"
                class="inline-flex h-10 w-10 items-center justify-center text-slate-700 transition-colors hover:text-[#5A98D8] sm:hidden"
                aria-controls="main-navigation" :aria-expanded="isMenuOpen" @click="isMenuOpen = !isMenuOpen">
                <span class="sr-only">
                    {{ isMenuOpen ? 'メニューを閉じる' : 'メニューを開く' }}
                </span>

                <svg v-if="isMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path stroke-linecap="square" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="square" stroke-width="1.5" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
            </button>

            <nav id="main-navigation" :class="isMenuOpen ? 'flex' : 'hidden'"
                class="mt-5 w-full flex-col border-t border-slate-300/80 pt-3 sm:mt-0 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-7 sm:border-0 sm:pt-0">
                <NuxtLink to="/" exact-active-class="text-[#5A98D8]"
                    class="py-2 text-sm tracking-wide text-slate-700 transition-colors hover:text-[#5A98D8] sm:py-1">
                    Home
                </NuxtLink>

                <NuxtLink to="/about" active-class="text-[#5A98D8]"
                    class="py-2 text-sm tracking-wide text-slate-700 transition-colors hover:text-[#5A98D8] sm:py-1">
                    About
                </NuxtLink>

                <NuxtLink to="/privacy" active-class="text-[#5A98D8]"
                    class="py-2 text-sm tracking-wide text-slate-700 transition-colors hover:text-[#5A98D8] sm:py-1">
                    Privacy
                </NuxtLink>

                <NuxtLink to="/contact" active-class="text-[#5A98D8]"
                    class="py-2 text-sm tracking-wide text-slate-700 transition-colors hover:text-[#5A98D8] sm:py-1">
                    Contact
                </NuxtLink>

            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)

watch(
    () => route.fullPath,
    () => {
        isMenuOpen.value = false
    }
)
</script>