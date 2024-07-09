<template>
<section class="contact-container">
        <h2>Contato</h2>
        <form action="">
            <label for="email">Seu email:</label>
            <input type="email" id="email" required maxlength="50">
            <label for="tel">Telefone/WhatsApp:</label>
            <input type="tel" id="tel" required maxlength="20">
            <label for="name">Nome completo:</label>
            <input type="text" id="name" maxlength="50">
            <label for="message">Escreva uma mensagem:</label>
            <textarea id="message" rows="7" required minlength="10" maxlength="500"></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>
</template>