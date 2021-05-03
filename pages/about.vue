<template>
    <div>
        <section class="py-20 bg-red-400">
            <div class="outer-container">
                <div class="flex justify-between items-end">
                    <h1 class="page-title">About</h1>
                </div>
            </div>
        </section>
        <section class="py-10">
            <div class="container">
                <div class="sm:flex">
                    <div class="sm:w-1/3">
                        <h2 class="text-4xl">NuxtJS + WordPress</h2>
                    </div>
                    <div class="sm:pl-8 sm:w-2/3 text-xl">
                        <p>This site was built to test using <a class="underline hover:no-underline" href="https://wordpress.org/" target="_blank">WordPress</a> as a headless CMS, exposing a <a class="underline hover:no-underline" href="https://www.wpgraphql.com/" target="_blank">GraphQL endpoint</a> that gets consumed by a <a class="underline hover:no-underline" href="https://vuejs.org/" target="_blank">Vue.js</a> application, built on top of the <a class="underline hover:no-underline" href="https://nuxtjs.org/" target="_blank">NuxtJS</a> framework.</p>
                        <p class="mt-8">The content is managed in the WordPress site located at <a class="underline hover:no-underline" href="https://www.kylewberg.com/" target="_blank">kylewberg.com</a>.</p>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-20">
                    <div class="w-56">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" title="Nuxt.js">
                            <g fill-rule="nonzero" transform="translate(0 50)" fill="none">
                                <path d="M227.92099 83.45116l-13.6889 24.10141-46.8148-82.44693L23.7037 278.17052h97.3037c0 13.31084 10.61252 24.10142 23.70371 24.10142H23.70371c-8.46771 0-16.29145-4.59601-20.5246-12.05272-4.23315-7.4567-4.23272-16.64312.00114-24.0994L146.89383 13.05492c4.23415-7.45738 12.0596-12.05138 20.5284-12.05138 8.46878 0 16.29423 4.594 20.52839 12.05138l39.97037 70.39623z" fill="#00C58E"/>
                                <path d="M331.6642 266.11981l-90.05432-158.56724-13.6889-24.10141-13.68888 24.10141-90.04445 158.56724c-4.23385 7.45629-4.23428 16.64271-.00113 24.09941 4.23314 7.4567 12.05689 12.05272 20.5246 12.05272h166.4c8.46946 0 16.29644-4.591 20.532-12.04837 4.23555-7.45736 4.23606-16.64592.00132-24.10376h.01976zM144.7111 278.17052L227.921 131.65399l83.19012 146.51653h-166.4z" fill="#2F495E"/>
                                <path d="M396.04938 290.22123c-4.23344 7.45557-12.05656 12.0507-20.52345 12.0507H311.1111c13.0912 0 23.7037-10.79057 23.7037-24.10141h40.66173L260.09877 74.98553l-18.4889 32.56704L227.921 83.45116l11.65432-20.51634c4.23416-7.45738 12.0596-12.05138 20.5284-12.05138 8.46879 0 16.29423 4.594 20.52839 12.05138l115.41728 203.185c4.23426 7.457 4.23426 16.6444 0 24.1014z" fill="#108775"/>
                            </g>
                        </svg>
                    </div>
                    <div class="pl-12 pr-16 text-6xl">&plus;</div>
                    <div class="w-48">
                        <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" xml:space="preserve" version="1.0" viewBox="0 0 5.5555557 5.5555555" title="WordPress">
                            <g transform="matrix(1.0755 0 0 1.0755 -3.5103 -1.6684)">
                                <path fill="#464342" d="m5.8465 1.9131c0.57932 0 1.1068 0.222 1.5022 0.58547-0.1938-0.0052-0.3872 0.11-0.3952 0.3738-0.0163 0.5333 0.6377 0.6469 0.2853 1.7196l-0.2915 0.8873-0.7939-2.3386c-0.0123-0.0362 0.002-0.0568 0.0465-0.0568h0.22445c0.011665 0 0.021201-0.00996 0.021201-0.022158v-0.13294c0-0.012193-0.00956-0.022657-0.021201-0.022153-0.42505 0.018587-0.8476 0.018713-1.2676 0-0.0117-0.0005-0.0212 0.01-0.0212 0.0222v0.13294c0 0.012185 0.00954 0.022158 0.021201 0.022158h0.22568c0.050201 0 0.064256 0.016728 0.076091 0.049087l0.3262 0.8921-0.4907 1.4817-0.8066-2.3758c-0.01-0.0298 0.0021-0.0471 0.0308-0.0471h0.25715c0.011661 0 0.021197-0.00996 0.021197-0.022158v-0.13294c0-0.012193-0.00957-0.022764-0.021197-0.022153-0.2698 0.014331-0.54063 0.017213-0.79291 0.019803 0.39589-0.60984 1.0828-1.0134 1.8639-1.0134l-0.0000029-0.0000062zm1.9532 1.1633c0.17065 0.31441 0.26755 0.67464 0.26755 1.0574 0 0.84005-0.46675 1.5712-1.1549 1.9486l0.6926-1.9617c0.1073-0.3036 0.2069-0.7139 0.1947-1.0443h-0.000004zm-1.2097 3.1504c-0.2325 0.0827-0.4827 0.1278-0.7435 0.1278-0.2247 0-0.4415-0.0335-0.6459-0.0955l0.68415-1.9606 0.70524 1.9284v-1e-7zm-1.6938-0.0854c-0.75101-0.35617-1.2705-1.1213-1.2705-2.0075 0-0.32852 0.071465-0.64038 0.19955-0.92096l1.071 2.9285 0.000003-0.000003zm0.95023-4.4367c1.3413 0 2.4291 1.0878 2.4291 2.4291s-1.0878 2.4291-2.4291 2.4291-2.4291-1.0878-2.4291-2.4291 1.0878-2.4291 2.4291-2.4291zm0-0.15354c1.4261 0 2.5827 1.1566 2.5827 2.5827s-1.1566 2.5827-2.5827 2.5827-2.5827-1.1566-2.5827-2.5827 1.1566-2.5827 2.5827-2.5827z"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    head: {
        title: 'About | Portfolio on NuxtJS | Kyle Berg',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Learn more about this app.'
            }
        ],
    },
};
</script>
