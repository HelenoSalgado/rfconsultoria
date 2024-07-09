// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      site: {
        url: process.env.BASE_URL
      }
    }
  },

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
      meta: [
        { name: 'theme-color', content: '#fe5420' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/fav/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/fav/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/fav/favicon-16x16.png' },
        { rel: 'manifest', href: '/img/fav/site.webmanifest' },
      ]
    },
  },
  $production: {
    app: {
      head: {
        link: [
          { href: '/css/main.min.css', rel: 'stylesheet', type: 'text/css' }
        ]
      }
    }
  },
  $development: {
    css: ['@/assets/css/main.css'],
  },
  modules: ["@nuxt/image"],

  image: {
    format: ['webp'],
  }
})