<template>
    <aside
        class="mt-14 w-full border-t border-slate-300 pt-9 lg:mt-0 lg:w-72 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0 xl:w-80">
        <section class="pb-9">
            <p class="font-mono text-[10px] tracking-[0.22em] text-[#5A98D8]">
                PROFILE
            </p>

            <div class="mt-5 flex items-start gap-4">
                <img src="/avatar.png" alt="汐猫みお" class="h-16 w-16 shrink-0 rounded-full object-cover">

                <div>
                    <h2 class="font-semibold leading-snug text-slate-900">
                        汐猫みお
                    </h2>
                    <p class="font-mono text-[10px] tracking-wide text-slate-500">
                        SHIONE Mio
                    </p>
                </div>
            </div>

            <p class="mt-5 text-sm leading-7 text-slate-600">
                she/her / YouTuber（個人勢）<br>
                Researcher? — Security, AI, Info Law<br>
                放送大学 学部全科生・修士選科生<br>
                学士（IT総合学）
            </p>

            <a href="https://x.com/skyfelis" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border-b border-slate-400 pb-1 text-xs text-slate-700 transition-colors hover:border-[#5A98D8] hover:text-[#5A98D8]">
                <svg aria-hidden="true" class="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>

                <span>@skyfelis</span>
                <span aria-hidden="true" class="font-mono text-[10px]">↗</span>
            </a>
        </section>

        <section class="border-t border-slate-300 py-9">
            <BlogRecentPosts />
        </section>

        <section class="border-t border-slate-300 py-9">
            <BlogCategoryList />
        </section>

        <section class="border-t border-slate-300 py-9">
            <BlogArchiveList />
        </section>
    </aside>
</template>