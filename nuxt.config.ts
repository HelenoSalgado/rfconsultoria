// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  nitro: {
    output: { publicDir: 'dist' },
    prerender: { failOnError: false, crawlLinks: true },
    minify: true
  },

  ssr: true,
  telemetry: false,
  experimental: { renderJsonPayloads: false, payloadExtraction: true },

  app: {
    head: {
      charset: 'UTF-8',
      htmlAttrs: { lang: 'pt-BR' },
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { href: '/css/main.min.css', rel: 'stylesheet', type: 'text/css' }
      ]
    },
  },
  $development: {
    css: ['@/assets/css/main.css'],
  },
  modules: ["@nuxt/image"],

  image: {
    format: ['webp'],
  },

  compatibilityDate: '2024-07-03'
})