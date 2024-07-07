<template>
    <footer>
        <div class="info-container">
            <div>
            <h3>Política de privacidade</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia culpa ducimus, optio mollitia eius et nostrum animi, adipisci porro quaerat cupiditate distinctio at similique, esse aliquam expedita! Alias, quod modi.</p>
        </div>
        <div>
            <h3>Contato</h3>
            <address class="contact">
                <NuxtLink href="tel:+5562996909812"><LazyIconsPhone />(62) 996909812</NuxtLink>
                <NuxtLink href="mailto:rogerio@gmail.com"><LazyIconsEmail />contato@rfconsultoria.com.br</NuxtLink>
                <NuxtLink href="http://maps.google.com/?q=Rua Duque de Caxias, 41 - Parque Real de Goiânia, Aparecida de Goiânia - GO, 74910-110" target="_blanck"><LazyIconsMap/>
                    Rua Duque de Caxias, Qd 41, Lt 7 - Parque Real de Goiânia, Aparecida de Goiânia - GO, 74910-110
                </NuxtLink>
            </address>
        </div>
        <div>
            <h3>Redes Sociais</h3>
            <SocialMedia />
        </div>
        </div>
        <p class="copy-writer">© RF Consultoria - Todos os direitos reservados - {{ new Date().getFullYear() }}</p>
        <ButtonWhatsApp/>
    </footer>
</template>