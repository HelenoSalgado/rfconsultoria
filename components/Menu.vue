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
.menu-header{
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    justify-content: end;
}
.menu-header li{
    list-style: none;
}
.menu-header li> a{
   font-weight: 700;
   color: var(--background-white);
}
</style>