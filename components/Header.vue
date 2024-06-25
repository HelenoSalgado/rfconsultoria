<template>
    <header>
        <div class="logo-container">
            <div class="logo">
                <NuxtLink href="/">
                    <img src="/img/logo.png" alt="logo">
                </NuxtLink>
            </div> 
            <h1>RF Consultoria</h1>
        </div> 
        <Menu></Menu>
    </header>
</template>
<style scoped>
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 2rem;
    position: fixed;
    width: 100%;
    background-color: var(--bck-light);
    z-index: 5;
    transition: var(--transition);
}
.logo-container {
    padding: .3rem .5rem;
    display: inline-flex;
    align-items: center;
    column-gap: 1rem;

    & .logo {
        background-color: var(--bck-primary);
        padding: .5rem;
        border: 1px solid var(--color-border);
        border-radius: 50%;

        & img {
            max-width: 30px;
        }


    }

    & h1 {
        font-size: clamp(12px, 16px, 24px);
        color: var(--color-primary);
    }
}
</style>