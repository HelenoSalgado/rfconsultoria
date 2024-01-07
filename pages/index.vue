<template>
    <main>
        <About />
        <section class="mission-cards">
            <div>
                <IconsTarget />
                <h3>Missão</h3>
                <p>Ajudar nossos clientes a prosperarem, fornecendo soluções e orientação estratégica.</p>
            </div>
            <div>
                <IconsEye />
                <h3>Visão</h3>
                <p>Tornar-se referência nacional em consultoria empresarial.</p>
            </div>

        </section>
    </main>
</template>
<style scoped>
main{
    padding: 0 1rem;
}
.mission-cards{
    margin: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.mission-cards div{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    margin: 1rem 3rem;
    background-color: var(--background-orange);
    color: var(--background-white);
    border: 1px solid var(--background-black);
    padding: 2rem 1rem;
    border-radius: 7px;
}
</style>