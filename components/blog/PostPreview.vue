<script lang="ts" setup>
defineProps(['title', 'src']);
</script>
<template>
    <div class="card-post-preview">
        <NuxtImg format="webp" loading="lazy" width="300px" height="200px" :src :alt="title"></NuxtImg>
        <h3>{{ title }}</h3>
    </div>
</template>