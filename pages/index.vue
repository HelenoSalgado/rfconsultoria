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
        <div>
            <div class="card">
                <NuxtImg src="/img/mission.png"></NuxtImg>
                <div>
                    <h3>MISSÃO</h3>
                    <p>Ajudar nossos clientes a prosperarem, fornecendo soluções e orientação estratégica.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/vision.png"></NuxtImg>
                <div>
                    <h3>VISÃO</h3>
                    <p>Tornar-se referência nacional em consultoria empresarial.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/united.webp"></NuxtImg>
                <div>
                    <h3>VALORES</h3> <br>
                    <p>
                        Integridade; <br>
                        Lealdade; <br>
                        Inovação; <br>
                        Foco no cliente; <br>
                        Responsabilidade Social; <br>
                        Sustentabilidade; <br>
                        Desenvolvimento Profissional.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <IconsWaves />
    <section class="services-container">
        <h2>Nossos Serviços</h2>
        <div>
            <div class="card">
                <NuxtImg src="/img/united.webp"></NuxtImg>
                <div>
                    <h3>PLANEJAMENTO ORÇAMENTÁRIO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur assumenda libero ab
                        incorporis.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/united.webp"></NuxtImg>
                <div>
                    <h3>PROCESSOS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur assumenda libero ab
                        incorporis.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/united.webp"></NuxtImg>
                <div>
                    <h3>ORÇAMENTO PESSOAL</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur assumenda libero ab
                        incorporis.</p>
                </div>
            </div>
            <div class="card">
                <NuxtImg src="/img/united.webp"></NuxtImg>
                <div>
                    <h3>FISCAL E TRIBUTÁRIO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur assumenda libero ab
                        incorporis.</p>
                </div>
            </div>
        </div>
    </section>
    <IconsWaverSup />
    <section class="partner-container">
        <h3>Seja nosso parceiro</h3>
        <p>Se você está procurando uma empresa de consultoria empresarial que possa ajudá-lo a alcançar o sucesso, entre
            em contato conosco. Será um prazer conhecê-lo e discutir como podemos ajudá-lo a alcançar seus objetivos.
        </p>
    </section>
    <LazyIconsWaves class="contact-divider" />
    <FormContact />
    <LazyIconsWaverSup class="pre-footer-divider" />
</template>
<style scoped>
.banner-header{
    top: 3rem;
}
.waver-divider-header{
    position: relative;
    margin-top: -7rem;
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
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-elevation-low);

        & img{
            width: 100%;
            border-radius: var(--border-radius);
            height: 100%;
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

    & div:nth-child(2){
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem;
        max-width: 1200px;
        margin: auto;

        & .card{
            position: relative;
            flex: 1 0 300px;
            height: 400px;
            background:
                linear-gradient(-190deg, #4323fa, #4323fa33 70.71%),
                linear-gradient(200deg, var(--bck-primary), #fe5522e7 70.71%),
                linear-gradient(360deg, var(--bck-primary), #fe5522e7 70.71%);
            border: 1px solid var(--color-border);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-elevation-low);
            overflow: hidden;

            & div{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 90%;
                transform: translate(-50%, -50%);
                padding: 2rem 1rem;
                color: var(--color-light);

                & p{
                    font-size: 1.1rem;
                }
            }
            & img{
                height: 100%;
                transition: 200ms ease-in;
                z-index: 0;
                filter: brightness(50%);
            }
        }
        .card:hover{

            & img{
                filter: brightness(30%);
            }
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