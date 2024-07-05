<script lang="ts" setup>
import services from 'assets/json/services.json';
import values from 'assets/json/values.json';
import questions from 'assets/json/questions.json';
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
    <section class="slides-container">
       <Banner />
       <div class="background-fixed-image">
            <NuxtImg format="webp" src="/img/finance.jpg" width="1200" height="auto" alt="Reunião de Negócio"/>
        </div>
       <DivisionTop fill="var(--bck-light)"/>
    </section>
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
    <LazyDivisionBottom fill="var(--bck-shadow)"/>
    <section class="container-questions">
        <h2>Perguntas Frequentes</h2>
        <div>
        <Question v-for="{ id, question, response } in questions" :key="id"
         :question
         :response
        />
       </div>
    </section>
    <section class="contact-container">
       <LazyDivisionBottom fill="var(--bck-light)"/>
        <FormContact />
        <div class="background-fixed-image">
           <NuxtImg format="webp" loading="lazy" src="/img/finance.jpg" alt="Escritório"></NuxtImg>
        </div>
       <LazyDivisionTop fill="var(--bck-light)"/>
    </section>
</template>