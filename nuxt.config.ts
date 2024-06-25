// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    output: {
      publicDir: 'dist'
    },
  },
  ssr: true,
  css: ['@/assets/css/main.css'],
  modules: ["@nuxt/image"],
  image: {
    presets: {
      cover: {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          width: 1200,
          height: 1200,
        },
      },
    },
  },
})