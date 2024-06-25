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
    <Banner class="banner-header" />
    <IconsWaverSup class="waver-divider-header" />
    <section class="call-container">
        <div>
            <h2>Tenha o melhor serviço de consultoria</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius ab iste, aliquid porro vero
                accusantium nobis quisquam voluptatibus deserunt obcaecati doloremque facilis corporis expedita
                excepturi placeat quaerat odio voluptatum.</p>
            <a href="">Faça um diagnóstico</a>
        </div>
        <div>
            <NuxtImg src="/img/rogerio-about.webp"></NuxtImg>
        </div>
    </section>
    <IconsWaverSup />
    <section class="values-container">
        <h2>Nossos Valores</h2>
        <div class="values-container-grid">
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
    <IconsWaves />
    <IconsWaverSup />
    <section class="partner-container">
        <h3>Seja nosso parceiro</h3>
        <p>Se você está procurando uma empresa de consultoria empresarial que possa ajudá-lo a alcançar o sucesso, entre em contato conosco. Será um prazer conhecê-lo e discutir como podemos ajudá-lo a alcançar seus objetivos.
        </p>
    </section>
    <LazyIconsWaves class="contact-divider" />
    <FormContact />
    <LazyIconsWaverSup class="pre-footer-divider" />
</template>
<style scoped>
.waver-divider-header{
    position: relative;
    margin-top: -10rem;
    fill: #fff;
    z-index: 1;
}
.call-container{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 2rem;
    color: var(--color-primary);
    padding: 0 1rem;
    z-index: 2;

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
            width: 100%;
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

    & .values-container-grid{
        display: grid;
        /* grid-template-columns: minmax(250px, 1fr) minmax(250px, 1.5fr) minmax(250px, 1fr); */
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: auto;

        & .card{
            position: relative;
            height: 400px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-elevation-low);
            overflow: hidden;
            display: grid;
            grid-template-rows: 200px 1fr;
            transition: var(--transition);

            & img{
                width: 100%;
                transition: var(--transition);
                filter: opacity(.7);
                z-index: 1;
            }

            & div{
                padding: 2rem 1rem;
                color: var(--color-primary);
                pointer-events: none;
                background-color: var(--bck-light);
                z-index: 1;

                & p{
                    font-size: 1.1rem;
                }

                /* & ::after{
                    position: absolute;
                    top: 200px;
                    left: 0;
                    content: '';
                    width: 0;
                    height: 3px;
                    background: linear-gradient(to right, var(--bck-primary), var(--bck-destaque));
                    transition: var(--transition);
                } */
            }

            &:hover{
                box-shadow: var(--bck-destaque) 0px 8px 30px -10px;

               & img{
                   filter: drop-shadow(1px 1px 1px var(--bck-destaque)) saturate(120%);
               }

               & div{
                  & ::after{
                    width: 100%;
                  }
               }
            }
        }
        & .card::before{
            position: absolute;
            content: '';
            width: 100%;
            height: 200px;
            background: orangered;
                /* linear-gradient(-190deg, #4323fa, #4323fa33 70.71%),
                linear-gradient(200deg, var(--bck-primary), #fe5522e7 70.71%),
                linear-gradient(360deg, var(--bck-primary), #fe5522e7 70.71%); */
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
.contact-divider{
    position: relative;
    fill: var(--bck-shadow);
    z-index: 2;
}

.pre-footer-divider{
    position: relative;
    margin-top: -10rem;
    z-index: 2;
    fill: #fff;
}

@media (min-width: 850px) {
    .values-container, .services-container, .call-container{
        margin-top: -5rem;
    }
}
</style>