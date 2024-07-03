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
            <NuxtImg format="webp" loading="lazy" src="/img/finance.jpg" alt="Escritório"></NuxtImg>
        </div>
    </section>
</template>