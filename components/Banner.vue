<template>
    <div class="slides-container">
        <div class="message">
            <p>Somos a RF Consultoria, uma empresa fundada por Rogério, com a visão de ajudar os seus clientes a
                prosperarem. Estamos comprometidos em oferecer soluções estratégicas de consultoria empresarial que ajudem
                nossos clientes a alcançar seus objetivos.</p>
            <a href="#">Saiba mais sobre o CEO</a>
        </div>
        <div class="background-fixed-image">
            <NuxtImg sizes="xs:320px, sm:640px, md:768px, lg:1024px, xl:1280px" src="/img/finance.jpg" width="1200" height="auto" alt="Reunião de Negócio"/>
        </div>
    </div>
</template>
<style scoped>
.slides-container{
    position: relative;
    width: 100%;
    height: 100vh;

    & .message{
        max-width: 500px;
        padding: 1rem;
        color: var(--color-light);
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translate(-20%, -50%);

        & p{
            line-height: 1.5rem;
            font-size: 1.1rem;
            text-shadow: .3px .5px .3px var(--bck-destaque);
        }

        & a {
            position: relative;
            display: inline-block;
            background-color: var(--bck-light);
            padding: .7rem 1rem;
            color: var(--color-secondary);
            font-size: 1.1rem;
            border-radius: 15px;
            font-weight: bold;
            box-shadow: var(--shadow-elevation-low);
            transition: 200ms ease-in;
        }

        & a:hover{
            background-color: var(--bck-destaque);
            color: var(--color-light);
        }
    }
}   
</style>