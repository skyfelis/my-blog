<template>
    <footer class="border-t py-6 mt-auto text-center text-sm text-gray-500">
        <div class="container mx-auto px-4">
            <div class="mb-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
                <NuxtLink to="/about">このブログについて</NuxtLink>
                <NuxtLink to="/privacy">プライバシーポリシー</NuxtLink>
                <NuxtLink to="/contact">お問い合わせ</NuxtLink>
                <a href="/feed.xml" type="application/rss+xml">
                    RSS
                </a>
            </div>
            <p>&copy; {{ new Date().getFullYear() }} SKYFELIS. All rights reserved.</p>
        </div>
    </footer>
</template>