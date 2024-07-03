<script lang="ts" setup>
import services from 'assets/json/services.json';
import values from 'assets/json/values.json';
useHead({
    script: [
        {
            src: '/js/header.js',
            defer: 'true',
            type: 'text/javascript'
        }
    ]
});
useSeoMeta({
    title: 'RF Consultoria',
    description: 'Somos a RF Consultoria, uma empresa fundada por Rogério, com a visão de ajudar os seus clientes a prosperarem.',
    ogDescription: 'Somos a RF Consultoria, uma empresa fundada por Rogério, com a visão de ajudar os seus clientes a prosperarem.',
    ogImage: '/img/logo.png',
});
</script>
<template>
    <Banner />
    <section class="about-container" id="about">
        <About/>
    </section>
    <DivisionTop fill="var(--bck-shadow)"/>
    <section class="values-container">
        <h2>Nossos Valores</h2>
        <div class="container-grid">
            <Card v-for="{ id, title, description, src } in values" :key="id"
            :title
            :description
            :src
            />
        </div>
    </section>
    <DivisionBottom fill="var(--bck-shadow)"/>
    <section class="services-container" id="services">
        <h2>Nossos Serviços</h2>
        <div class="container-grid">
            <Card v-for="{ id, title, description, src } in services" :key="id"
            :title
            :description
            :src
            />
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