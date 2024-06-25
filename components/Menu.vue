<template>
    <div class="hamburger"><span></span><span></span><span></span></div>
    <nav class="menu-header">
       <ul>
        <li><a href="#">Quem Somos</a></li>
        <li><a href="#">Nossos Objetivos</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Fale Conosco</a></li>
       </ul>
    </nav>
</template>
<style scoped>
.menu-header {

    & ul {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;

        & li {
            position: relative;
            list-style: none;

            & a {
                font-weight: 600;
                color: var(--color-primary);
                transition: 150ms all;
            }

            & a:hover {
                color: var(--color-secondary);
            }

        }

        & li::before {
            position: absolute;
            content: '';
            bottom: -5px;
            width: 0;
            height: 3px;
            background-color: var(--bck-primary);
            border-radius: 5px;
            transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        & li:hover::before {
            width: 100%;
        }
    }
}
</style>