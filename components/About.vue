<template>
    <section class="about-container">
        <div class="apresentation">
            <p>Somos a RF Consultoria, uma empresa fundada por Rogério, com a visão de ajudar os seus clientes a
                prosperarem. Estamos comprometidos em oferecer soluções estratégicas de consultoria empresarial que ajudem
                nossos clientes a alcançar seus objetivos.</p>
            <a href="#">Saiba mais sobre o CEO</a>
        </div>
        <div class="apresentation-image">
            <img src="/img/finance.jpg" alt="">
        </div>
    </section>
</template>
<style scoped>
.about-container {
    position: relative;

    & .apresentation {
            max-width: 500px;
            text-align: justify;

            & p{
                color: var(--background-destaque)
            }

            & p{
                line-height: 1.5rem;
            }
    
            & a {
                position: relative;
                background-color: var(--background-destaque);
                padding: .3rem 1rem;
                color: var(--color-fonte-light);
            }
    
            & a::before {
                content: '';
                position: absolute;
                /* width: 20px;
                height: 100%;
                background-color: var(--background-destaque); */
                top: 50%;
                transform: translateY(-49%);
                right: -14px;
                border-top: 14px solid transparent;
                border-bottom: 14px solid transparent;
                border-left: 14px solid var(--background-destaque);
            }
        }

    & .apresentation-image {
        position: absolute;
        top: 0;
        max-height: 300px;
        overflow: hidden;
        z-index: -1;
    
    & img {
       width: 100%;
    }
}
}
</style>