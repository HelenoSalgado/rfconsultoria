<script lang="ts" setup>
defineProps(['title', 'description', 'src']);
</script>
<template>
    <div class="card">
        <NuxtImg format="webp" loading="lazy" :src :alt="title"></NuxtImg>
        <div>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>