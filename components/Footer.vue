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
                <NuxtLink href="mailto:rogerio@gmail.com"><LazyIconsEmail />rogerio@gmail.com</NuxtLink>
                <NuxtLink href="#"><LazyIconsMap />
                    Mozilla Foundation, 1981 Landings Drive, CA 94043-0801 USA
                </NuxtLink>
            </address>
        </div>
        <div>
            <h3>Redes Sociais</h3>
            <SocialMedia />
        </div>
        </div>
        <p class="copy-writer">© RF Consultoria - Todos os direitos reservados - 2023</p>
        <ButtonWhatsApp/>
    </footer>
</template>