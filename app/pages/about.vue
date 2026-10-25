<template>
    <div class="mx-auto max-w-4xl">
        <!-- ページ見出し -->
        <header class="border-b border-slate-300 pb-10">
            <p class="mb-5 text-xs font-semibold tracking-[0.24em] text-[#5A98D8]">
                ABOUT
            </p>

            <div class="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                    <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        汐猫みお
                    </h1>

                    <p class="mt-2 text-sm tracking-wide text-slate-500">
                        Researcher &amp; Programmer
                    </p>

                    <p class="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                        研究の知見、Web・セキュリティ・低レイヤーを中心とした技術メモ、
                        読んだ本のログ、そして日々の思考を記録する個人ブログです。
                        学んだことや試したことを、言葉にして残す場所として運用しています。
                    </p>
                </div>

                <img src="/avatar.png" alt="汐猫みおのアバター"
                    class="h-24 w-24 rounded-full border border-slate-300 object-cover sm:h-28 sm:w-28">
            </div>
        </header>

        <!-- ブログについて -->
        <section class="grid gap-6 border-b border-slate-300 py-10 sm:grid-cols-[10rem_1fr]">
            <div>
                <p class="text-xs font-semibold tracking-[0.2em] text-[#5A98D8]">
                    01
                </p>
                <h2 class="mt-2 text-base font-bold text-slate-900">
                    このブログについて
                </h2>
            </div>

            <div>
                <p class="text-sm leading-7 text-slate-600">
                    「潮の香りのする猫の足跡」は、専門的なアウトプットから日々の雑記まで、
                    自身の活動ログをストックしておくためのブログです。
                </p>

                <dl class="mt-8 grid gap-x-8 sm:grid-cols-2">
                    <div class="border-t border-slate-200 py-5">
                        <dt class="font-semibold text-slate-900">
                            Research
                            <span class="ml-2 text-xs font-normal text-slate-400">研究</span>
                        </dt>
                        <dd class="mt-2 text-sm leading-6 text-slate-600">
                            研究ノートや発表のまとめ、論文の要約、サーベイの記録。
                        </dd>
                    </div>

                    <div class="border-t border-slate-200 py-5">
                        <dt class="font-semibold text-slate-900">
                            Technology
                            <span class="ml-2 text-xs font-normal text-slate-400">技術</span>
                        </dt>
                        <dd class="mt-2 text-sm leading-6 text-slate-600">
                            Web開発、セキュリティ、OS・ネットワークなどの検証や開発ログ。
                        </dd>
                    </div>

                    <div class="border-t border-slate-200 py-5">
                        <dt class="font-semibold text-slate-900">
                            Books
                            <span class="ml-2 text-xs font-normal text-slate-400">読書</span>
                        </dt>
                        <dd class="mt-2 text-sm leading-6 text-slate-600">
                            技術書や専門書、小説、新書から得た学びと読書記録。
                        </dd>
                    </div>

                    <div class="border-t border-slate-200 py-5">
                        <dt class="font-semibold text-slate-900">
                            Life
                            <span class="ml-2 text-xs font-normal text-slate-400">日常</span>
                        </dt>
                        <dd class="mt-2 text-sm leading-6 text-slate-600">
                            日々考えていることや、買ったもの、雑多な手記。
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        <!-- 技術構成 -->
        <section class="grid gap-6 border-b border-slate-300 py-10 sm:grid-cols-[10rem_1fr]">
            <div>
                <p class="text-xs font-semibold tracking-[0.2em] text-[#5A98D8]">
                    02
                </p>
                <h2 class="mt-2 text-base font-bold text-slate-900">
                    技術構成
                </h2>
            </div>

            <div>
                <p class="mb-6 text-sm leading-7 text-slate-600">
                    このブログは、記事の執筆から公開まで自分で管理できる構成で運用しています。
                </p>

                <dl class="border-t border-slate-300 text-sm">
                    <div class="grid grid-cols-[7rem_1fr] border-b border-slate-200 py-3">
                        <dt class="text-slate-500">Framework</dt>
                        <dd class="font-medium text-slate-800">Nuxt 4</dd>
                    </div>

                    <div class="grid grid-cols-[7rem_1fr] border-b border-slate-200 py-3">
                        <dt class="text-slate-500">Language</dt>
                        <dd class="font-medium text-slate-800">TypeScript</dd>
                    </div>

                    <div class="grid grid-cols-[7rem_1fr] border-b border-slate-200 py-3">
                        <dt class="text-slate-500">Content</dt>
                        <dd class="font-medium text-slate-800">Nuxt Content</dd>
                    </div>

                    <div class="grid grid-cols-[7rem_1fr] border-b border-slate-200 py-3">
                        <dt class="text-slate-500">Styling</dt>
                        <dd class="font-medium text-slate-800">Tailwind CSS</dd>
                    </div>
                </dl>
            </div>
        </section>

        <!-- リンク -->
        <section class="grid gap-6 border-b border-slate-300 py-10 sm:grid-cols-[10rem_1fr]">
            <div>
                <p class="text-xs font-semibold tracking-[0.2em] text-[#5A98D8]">
                    03
                </p>
                <h2 class="mt-2 text-base font-bold text-slate-900">
                    Links
                </h2>
            </div>

            <nav aria-label="外部リンク" class="flex flex-col">
                <a href="https://github.com/skyfelis" target="_blank" rel="noopener noreferrer"
                    class="group flex items-center justify-between border-t border-slate-200 py-4 text-sm text-slate-700 transition-colors hover:text-[#5A98D8]">
                    <span>GitHub</span>
                    <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">↗</span>
                </a>

                <a href="https://x.com/skyfelis" target="_blank" rel="noopener noreferrer"
                    class="group flex items-center justify-between border-y border-slate-200 py-4 text-sm text-slate-700 transition-colors hover:text-[#5A98D8]">
                    <span>X</span>
                    <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">↗</span>
                </a>
            </nav>
        </section>

        <footer class="pt-8">
            <NuxtLink to="/" class="text-sm text-slate-500 transition-colors hover:text-[#5A98D8]">
                ← 記事一覧へ戻る
            </NuxtLink>
        </footer>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'このブログについて | 潮の香りのする猫の足跡',
    description: '研究、Web・セキュリティ・低レイヤー技術、読書、日常の記録を発信する個人ブログ「潮の香りのする猫の足跡」の紹介ページです。'
})
</script>