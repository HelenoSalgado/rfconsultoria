<template>
<section class="contact-container">
        <h2>Contato</h2>
        <form action="">
            <label for="email">Seu email:</label>
            <input type="email" name="" id="email">
            <label for="name">Nome completo:</label>
            <input type="text" name="" id="name">
            <label for="message">Escreva uma mensagem:</label>
            <textarea name="" id="message" rows="7"></textarea>
            <button type="submit">Enviar</button>
        </form>
        <div class="background-fixed-image">
            <NuxtImg src="/img/finance.jpg"></NuxtImg>
        </div>
    </section>
</template>
<style scoped>
.contact-container{
    position: relative;
    margin-top: -15rem;
    padding: 10rem 1rem;
    background-image: var(--bck-gradient);
    background-blend-mode: luminosity;
    z-index: 1;

    h2{
        text-align: center;
        font-size: 1.8rem;
        color: var(--color-light);
        width: fit-content;
        padding: .7rem 2rem;
        margin: 2rem auto 5rem auto;
        text-shadow:  2px 1px 3px var(--bck-primary);
        border-radius: var(--border-radius);
    }

    & form{
        display: grid;
        grid-template-columns: minmax(200px, 500px);
        justify-content: center;
        row-gap: 1rem;
        max-width: 800px;
        margin: 2rem auto;
        background-color: #ffffff2d;
        backdrop-filter: blur(4px);
        padding: 3rem 1rem 4rem 1rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-elevation-low);

        & label, button{
            margin-top: .5rem;
            color: var(--color-light);
            font-size: 1.1rem;
        }

        & input, textarea{
            border: none;
            padding: .6rem;
            font-size: 1.2rem;
            border-radius: 15px;
            transition: 200ms ease-in;
        }

        & input:focus, textarea:focus{
            outline-color: var(--bck-primary);
            box-shadow: var(--shadow-elevation-low);
        }

        & textarea{
            min-height: 200px;
            max-height: 500px;
        }

        & button{
            height: 50px;
            border: none;
            border-radius: 15px;
            font-weight: bold;
            transition: 200ms ease-in;
            box-shadow: var(--shadow-elevation-low);
            color: var(--color-primary);
            font-size: 1.1rem;
            cursor: pointer;
        }

        & button:hover{
            background-color: var(--bck-destaque);
            color: var(--color-light);
            box-shadow: var(--shadow-elevation-low);
            border: 1px solid var(--color-light);
        }
    }

}
</style>