<script lang="ts" setup>
useHead({
    script: [
        {
            src: '/js/header.js',
            defer: 'true',
            type: 'text/javascript'
        }
    ]
})
</script>
<template>
    <Banner />
    <section class="call-container" id="about">
        <div>
            <h2>Tenha o melhor serviço de consultoria</h2>
            <p>Somos a RF Consultoria, uma empresa fundada por Rogério, com a visão de ajudar os seus clientes a prosperarem. Estamos comprometidos em oferecer soluções estratégicas de consultoria empresarial que ajudem nossos clientes a alcançar seus objetivos.</p>
            <a href="">Faça um diagnóstico</a>
        </div>
        <div>
            <NuxtImg src="/img/rogerio-about.webp"></NuxtImg>
        </div>
    </section>
    <DivisionTop fill="var(--bck-shadow)"/>
    <section class="values-container">
        <h2>Nossos Valores</h2>
        <div class="container-grid">
            <div class="card">
                <NuxtImg src="/img/mission-image.jpg"></NuxtImg>
                <div>
                    <h3>MISSÃO</h3>
                    <p>Ajudar nossos clientes a prosperarem, fornecendo soluções e orientação estratégica.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/vision.jpg"></NuxtImg>
                <div>
                    <h3>VISÃO</h3>
                    <p>Tornar-se referência nacional em consultoria empresarial.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/book-pages-pixabay.jpg"></NuxtImg>
                <div>
                    <h3>VALORES</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam itaque autem repudiandae vero natus cum dicta blanditiis.</p>
                </div>
            </div>
        </div>
    </section>
    <DivisionBottom fill="var(--bck-shadow)"/>
    <section class="services-container" id="services">
        <h2>Nossos Serviços</h2>
        <div class="container-grid">
            <div class="card">
                <NuxtImg src="/img/mission-image.jpg"></NuxtImg>
                <div>
                    <h3>Planejamento Orçamentário</h3>
                    <p>Ajudar nossos clientes a prosperarem, fornecendo soluções e orientação estratégica.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/vision.jpg"></NuxtImg>
                <div>
                    <h3>Processos</h3>
                    <p>Tornar-se referência nacional em consultoria empresarial.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/book-pages-pixabay.jpg"></NuxtImg>
                <div>
                    <h3>Orçamento Pessoal</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam itaque autem repudiandae vero natus cum dicta blanditiis.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/book-pages-pixabay.jpg"></NuxtImg>
                <div>
                    <h3>Fiscal e Tributário</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam itaque autem repudiandae vero natus cum dicta blanditiis.</p>
                </div>
            </div>
        </div>
    </section>
    <LazyDivisionTop fill="var(--bck-shadow)"/>
    <section class="partner-container">
        <h3>Seja nosso parceiro</h3>
        <p>Se você está procurando uma empresa de consultoria empresarial que possa ajudá-lo a alcançar o sucesso, entre em contato conosco. Será um prazer conhecê-lo e discutir como podemos ajudá-lo a alcançar seus objetivos.
        </p>
    </section>
    <LazyDivisionBottom fill="var(--bck-shadow)" style="position: relative; z-index: 2;"/>
    <FormContact />
    <LazyDivisionTop fill="var(--bck-light)" style="position: relative; z-index: 2; margin-top: -10rem"/>
</template>
<style scoped>
.call-container{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 2rem;
    color: var(--color-primary);
    padding: 0 1rem;

    div{
        flex: 1 1 250px;
    }

    & div:first-child{
        max-width: 500px;
        align-self: center;

        & a{
            display: inline-block;
            margin-top: 1rem;
            padding: 1rem 2rem;
            background-color: var(--bck-primary);
            border-radius: 15px;
            font-weight: bold;
            color: #fff;
            box-shadow: var(--shadow-elevation-low);
            transition: 200ms ease-in;
        }
        & a:hover{
            background-color: var(--bck-primary-hover);
            box-shadow: 1px 5px 15px var(--bck-destaque);
        }
    }

    & div:last-child{
        margin: 2rem 0;
        max-width: 500px;
        border-radius: var(--border-radius);
        overflow: hidden;
        border: 4px double var(--bck-primary);
        box-shadow: var(--shadow-elevation-low);

        & img{
            object-fit: cover;
            height: 100%;
            border-radius: var(--border-radius);
            transition: 200ms ease-in;
        }
        & img:hover{
            filter: brightness(120%);
        }
    }
}
.values-container{
    background-color: var(--bck-shadow);
}
.values-container {
    & .container-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

        & .card {
            & div{
                color: var(--color-primary);
                background-color: var(--bck-light);
            }
            & img{
                filter: opacity(.7);
            }
            &:hover{
               & img{
                   filter: drop-shadow(1px 1px 1px var(--bck-destaque)) saturate(120%);
               }
            }
        }
    }
}
.services-container {
    & .container-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

        & .card {
            & div{
                color: var(--color-light);
                background-color: var(--bck-primary);
                background-blend-mode: luminosity;
                transition: var(--transition);
            }
            &:hover{
               & div{
                 color: var(--color-primary);
                 background-color: var(--bck-light);
                }

               & img{
                   filter: drop-shadow(1px 1px 1px var(--bck-destaque)) saturate(120%) opacity(.7);
               }
            }
        }
    }
}
.values-container, .services-container{
    margin-top: -33px;
    padding: 0 1rem 5rem 1rem;

    & h2{
        position: relative;
        text-align: center;
        font-size: 2rem;
        width: fit-content;
        margin: 0 auto 7rem auto;
        color: var(--color-primary);
    }

    & .container-grid, .container-grid{
        display: grid;
        /* grid-template-columns: minmax(250px, 1fr) minmax(250px, 1.5fr) minmax(250px, 1fr); */
        gap: 2rem;
        max-width: 1200px;
        margin: auto;

        & .card{
            position: relative;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-elevation-low);
            overflow: hidden;
            display: grid;
            grid-template-rows: 200px 1fr;
            transition: var(--transition);

            & img{
                width: 100%;
                height: auto;
                min-height: 200px;
                transition: var(--transition);
                z-index: 1;
            }

            & div{
                padding: 2rem 1rem;
                pointer-events: none;
                z-index: 1;

                & p{
                    font-size: 1.1rem;
                }
            }
            &:hover{
                box-shadow: var(--bck-destaque) 0px 8px 30px -10px;
            }

        }
        & .card::before{
            position: absolute;
            content: '';
            width: 100%;
            height: 200px;
            background: orangered;
            background-blend-mode: luminosity;
        }
    }
}
.partner-container{
    position: relative;
    max-width: 100%;
    margin: -50px auto 0 auto;
    background-color: var(--bck-shadow);
    color: var(--color-primary);
    padding: 2rem 1rem 5rem 1rem;
    z-index: 2;

    & h3, p{
        max-width: 600px;
        margin: auto;
    }

    & h3{
        color: var(--background-destaque);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    & p {
        line-height: 1.5rem;
    }
}
</style>