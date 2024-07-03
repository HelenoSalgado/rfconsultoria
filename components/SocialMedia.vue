<template>
    <div class="social-media">
    <NuxtLink>
        <LazyIconsInstagram/>
    </NuxtLink>
    <NuxtLink>
       <LazyIconsLinkedin/>
    </NuxtLink>
    <NuxtLink>
        <LazyIconsYoutube/>
    </NuxtLink>
</div>
</template>
<style>
.social-media {
    display: inline-flex;
    column-gap: 1rem;

    & svg {
        width: 30px;
        height: 30px;
        fill: var(--bck-primary);
        stroke: var(--color-light);
    }
}
</style>