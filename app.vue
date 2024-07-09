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
  ogImage: `${pub.site.url + route.meta.ogImage}`,
  twitterTitle: `${title.value}`,
  author: 'Heleno Salgado',
  ogLocale: 'pt-BR',
  ogUrl: `${pub.site.url + route.path}`,
  twitterCard: 'summary_large_image',
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
