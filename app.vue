<script lang="ts" setup>
const route = useRoute();
const { public: pub } = useRuntimeConfig();
const title = computed(() => route.meta.title ? `RF Consultoria | ${route.meta.title}` : 'RF Consultoria'
);

useHead({
  titleTemplate: ((titleChunk) => {
    if (titleChunk?.includes('|')) return titleChunk;
    return title.value
  })
});

useSeoMeta({
  ogTitle: `${title.value}`,
  ogDescription: `${route.meta.description}`,
  ogImage: `${pub.site.url + route.meta.ogImage}`,
  author: 'Heleno Salgado',
  ogLocale: 'pt-BR',
  ogUrl: `${pub.site.url + route.path}`,
  twitterTitle: `${title.value}`,
  twitterDescription: `${route.meta.description}`,
  twitterCard: 'summary_large_image',
  twitterImage: `${pub.site.url + route.meta.ogImage}`,
  twitterCreator: '@HelenoSalgado'
});

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
