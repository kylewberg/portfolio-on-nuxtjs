<template>
    <div class="flex flex-col min-h-screen">
        <header class="flex-none py-4 px-4 xl:text-lg">
            <div class="flex justify-between">
                <div class="relative">
                    <NuxtLink class="block absolute top-0 left-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full shadow overflow-hidden" to="/">
                        <img class="absolute top-0 left-0 w-full h-full object-cover" src="~/assets/images/profile.jpg" title="Kyle’s Portfolio" />
                    </NuxtLink>
                </div>
                <nav>
                    <NuxtLink class="inline-block ml-3 hover:underline" to="/">Portfolio</NuxtLink> <NuxtLink class="inline-block ml-3 hover:underline" to="/about">About</NuxtLink>
                </nav>
            </div>
        </header>
        <main class="flex-grow">
            <Nuxt keep-alive />
        </main>
        <footer class="flex-none py-3 px-4 mt-20 xl:text-lg">
            <div class="flex justify-between">
                <div>
                    <a class="inline-block mr-3 hover:underline" href="mailto:developer@kylewberg.com">Email</a> <a class="inline-block mr-3 hover:underline" href="https://www.linkedin.com/in/kyle-berg" target="_blank">LinkedIn</a>
                </div>
                <div>
                    <span class="">&copy; 2021 Kyle Berg</span>
                </div>
            </div>
        </footer>
    </div>
</template>
<style>

body {
    @apply bg-orange-100;
    @apply text-gray-800;
    @apply font-body;
}

.outer-container {
    @apply px-8;
}

.page-title {
    @apply text-6xl;
    line-height: 1.1;

    @screen lg {
        font-size: 6vw;
    }
}

.button {
    @apply px-3;
    @apply py-2;
    @apply rounded;
    @apply border-gray-800;
    @apply border-2;
    @apply inline-block;
    @apply bg-orange-200;

    @screen lg {
        @apply text-xl;
    }
}

.button:hover {
    @apply bg-pink-200;
}

.prose p { @apply my-4; }

.prose a { @apply underline; }

.max-w-prose { max-width: 65ch; }

</style>
