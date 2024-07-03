<template>
    <div class="slides-container">
        <div class="message">
            <!-- <p>Somos a RF Consultoria, uma empresa fundada por Rogério, com a visão de ajudar os seus clientes a
                prosperarem. Estamos comprometidos em oferecer soluções estratégicas de consultoria empresarial que ajudem
                nossos clientes a alcançar seus objetivos.</p> -->
                <h2>Vamos te ajudar a prosperar</h2>
                <p>
                    <strong>
                        Estamos comprometidos em oferecer soluções estratégicas de consultoria empresarial que ajudem nossos clientes a alcançar seus objetivos.
                   </strong>
                </p>
            <!-- <a href="#">Saiba mais sobre o CEO</a> -->
        </div>
        <div class="background-fixed-image">
            <NuxtImg sizes="xs:320px, sm:640px, md:768px, lg:1024px, xl:1280px" src="/img/finance.jpg" width="1200" height="auto" alt="Reunião de Negócio"/>
        </div>
        <DivisionTop fill="var(--bck-light)"/>
    </div>
</template>
<style scoped>
.slides-container{
    padding-top: 65px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    background-image: var(--bck-gradient);
    background-blend-mode: luminosity;
    z-index: -1;

    & .message{
        color: var(--color-light);
        grid-column: 1;
        grid-row: 2;
        padding: .5rem;
        max-width: 500px;
        margin: auto;

        & h2{
            font-size: 2rem;
            text-shadow: .3px .5px .3px var(--bck-primary);
        }

        & p{
            line-height: 1.3rem;
            margin: auto;
        }

        & a {
            position: relative;
            background-color: var(--bck-primary);
            background-blend-mode: luminosity;
            padding: .7rem 1rem;
            color: var(--color-light);
            border: 2px solid var(--color-border);
            border-radius: 15px;
            transition: 200ms ease-in;
            font-weight: 600;
        }

        & a:hover{
            background-color: var(--bck-destaque);
            color: var(--color-light);
        }
    }

    & svg{
        grid-row: 4;
        margin-bottom: -1px;
    }
}
</style>