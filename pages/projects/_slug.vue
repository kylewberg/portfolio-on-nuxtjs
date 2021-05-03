<template>
    <article>
        <section class="py-20 bg-red-400">
            <div class="outer-container">
                <div class="">
                    <p class="text-gray-700 text-lg lg:text-xl">{{ project.date | formatDate }}</p>
                    <h1 class="page-title max-width-prose">{{ project.title }}</h1>
                </div>
            </div>
        </section>
        <section class="py-10">
            <div class="outer-container">
                <div class="flex flex-wrap">
                    <div class="pb-8 lg:pr-8 lg:pb-0 lg:w-1/2 lg:flex lg:justify-end">
                        <div class="prose max-w-prose text-lg lg:text-2xl" v-html="project.content"></div>
                    </div>
                    <div v-if="project.featuredImage" class="lg:w-1/2">
                        <img class="shadow-lg lg:-mt-24" :src="project.featuredImage.node.sourceUrl" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-10">
            <div class="outer-container">
                <div class="flex text-gray-700 text-base lg:text-lg">
                    <div class="mr-8">
                        <div class="text-sm lg:text-base uppercase">Technologies Used</div>
                        <div class="max-w-prose">
                            <span v-for="(tag, index) in project.tags.nodes" :key="tag.id">{{ tag.name }}{{ index !== project.tags.nodes.length - 1 ? ',': '' }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-4 mt-8">
            <div class="outer-container text-center">
                <NuxtLink class="button" to="/">&laquo; View All Projects</NuxtLink>
            </div>
        </section>
    </article>
</template>
<script>
export default {
    head: {
        title: 'Project | Portfolio on NuxtJS | Kyle Berg',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'A web development project by Kyle Berg.'
            }
        ],
    },
    async asyncData({ $http, params }) {
        $http.setHeader('Content-Type', 'application/json');
        const response = await $http.$post(
            'https://www.kylewberg.com/graphql',
            JSON.stringify({
                query: `
                    {
                        post(id: "${params.slug}", idType: SLUG) {
                            id
                            title
                            date
                            content(format: RENDERED)
                            featuredImage {
                                node {
                                    sourceUrl(size: LARGE)
                                }
                            }
                            tags {
                                nodes {
                                    id
                                    name
                                    slug
                                }
                            }
                        }
                    }
                `,
            }),
            {}
        );

        return { project: response.data.post };
    },
};
</script>
