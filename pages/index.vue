<template>
    <div>
        <section class="py-20 bg-red-400">
            <div class="outer-container">
                <h1 class="page-title">Portfolio</h1>
                <p class="text-2xl">Check out my most recent&nbsp;work.</p>
            </div>
        </section>
        <section class="hidden pt-4">
            <div class="outer-container">
                <div class="text-right">
                    <button v-if="filtersVisible" @click="filtersVisible=false" class="button">Hide Filters &minus;</button>
                    <button v-else @click="filtersVisible=true" class="button">Show Filters &plus;</button>
                </div>
                <div v-if="filtersVisible" class="flex mt-4 border border-dotted border-gray-700">
                    <div class="w-1/3 p-4">
                        <div class="uppercase">Project Type</div>
                    </div>
                    <div class="w-2/3 p-4">
                        <div class="uppercase">Technology Used</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-10">
            <div class="outer-container">
                <div class="text-lg xl:text-xl">
                    <p v-if="$fetchState.pending">Loading projects...</p>
                    <p v-else-if="$fetchState.error">Error while loading projects</p>
                </div>
                <div v-if="projects.length > 0">
                    <div v-for="project in projects" :key="project.id" class="md:flex mb-20 lg:mb-32">
                        <div class="mb-4 md:w-1/3">
                            <h2 class="text-3xl lg:text-4xl xl:text-6xl leading-tight"><NuxtLink class="hover:underline" :to="{name: 'projects-slug', params: { id: project.id, slug: project.slug }}">{{ project.title }}</NuxtLink></h2>
                            <p class="text-xl xl:text-2xl text-gray-700">{{ project.date | formatDate }}</p>
                        </div>
                        <div class="md:pl-8 md:w-2/3">
                            <img v-if="project.featuredImage" class="w-full h-auto shadow-md mb-4 xl:mb-12 " :src="project.featuredImage.node.sourceUrl" alt="" style="max-width:1280px;">
                            <div class="text-lg max-w-prose xl:text-xl" v-html="project.excerpt"></div>
                            <NuxtLink class="mt-4 button" :to="{name: 'projects-slug', params: { id: project.id, slug: project.slug }}">View Project &raquo;</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="hasNextPage" class="py-4">
            <div class="outer-container text-center">
                <button class="button" @click="loadMoreProjects">Load More Projects <span class="inline-block" :class="{'is-spinning': loadingMoreProjects}">&plus;</span></button>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    head: {
        title: 'Projects | Portfolio on NuxtJS | Kyle Berg',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Kyle’s most recent web development projects.'
            }
        ],
    },
    data() {
        return {
            projects: [],
            endCursor: '',
            hasNextPage: false,
            hasPreviousPage: false,
            loadingMoreProjects: false,
            filtersVisible: false,
        }
    },
    async fetch() {
        const initialProjects = await this.getProjects();
        this.projects.push(...initialProjects);
    },
    methods: {
        async getProjects() {
            this.$http.setHeader('Content-Type', 'application/json');

            const response = await this.$http.$post(
                'https://www.kylewberg.com/graphql',
                JSON.stringify({
                    query: `
                        {
                            posts(first: 10, after: "${this.endCursor}") {
                                nodes {
                                    id
                                    title
                                    date
                                    excerpt(format: RENDERED)
                                    featuredImage {
                                        node {
                                            sourceUrl(size: MEDIUM_LARGE)
                                        }
                                    }
                                    slug
                                }
                                pageInfo {
                                    hasNextPage
                                    hasPreviousPage
                                    endCursor
                                    startCursor
                                }
                            }
                        }
                    `,
                })
            );

            this.endCursor = response.data.posts.pageInfo.endCursor;
            this.hasNextPage = response.data.posts.pageInfo.hasNextPage;
            this.hasPreviousPage = response.data.posts.pageInfo.hasPreviousPage;

            return response.data.posts.nodes;
        },
        async loadMoreProjects() {
            this.loadingMoreProjects = true;
            const moreProjects = await this.getProjects();
            this.projects.push(...moreProjects);
            this.loadingMoreProjects = false;
        },
    },
};
</script>
<style>
@keyframes spinning {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(540deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1080deg);
  }
}

.is-spinning {
    display: inline-block;
    animation: spinning 1.2s infinite;
}
</style>
