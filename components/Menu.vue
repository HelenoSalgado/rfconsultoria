<template>
    <nav class="menu-header">
        <li><a href="#">Quem Somos</a></li>
        <li><a href="#">Nossos Objetivos</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Fale Conosco</a></li>
    </nav>
</template>
<style scoped>
.menu-header {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;

    & li {
        position: relative;
        list-style: none;

        & a {
            font-weight: 700;
            color: var(--color-primary);
            transition: 150ms all;
            /* text-shadow: .3px .5px .3px #000; */
        }

        & a:hover{
            color: var(--color-primary-hover);
        }

    }

    & li::before{
        position: absolute;
        content: '';
        bottom: -5px;
        width: 0;
        height: 4px;
        background-color: var(--color-primary-hover);
        border-radius: 5px;
        transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    & li:hover::before{
        width: 100%;
    }
}
</style>