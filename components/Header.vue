<template>
    <header>
        <div class="logo">
            <img src="/img/logo.png" alt="">
            <h1>Rf Consultoria</h1>
        </div>
        <Menu />
    </header>
</template>
<style scoped>
header{
    padding: 1rem .8rem;
    background-color: var(--background-orange);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo>img{
    max-width: 30px;
}
.logo> h1{
    font-size: .8rem;
    text-transform: uppercase;
    color: var(--background-white);
}
</style>