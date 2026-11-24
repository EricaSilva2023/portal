// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  vite: { plugins: [tailwindcss()] },
  colorMode: { classSuffix: '' },   // coloca a classe "dark" no <html>
  shadcn: { prefix: '', componentDir: './app/components/ui' },
  i18n: {
    defaultLocale: 'pt-BR',
    strategy: 'prefix_except_default',   // /sobre, /en-GY/sobre, /es-VE/sobre
    locales: [
      { code: 'pt-BR', language: 'pt-BR', name: 'Português', file: 'pt-BR.json' },
      { code: 'en-GY', language: 'en-GY', name: 'English',   file: 'en-GY.json' },
      { code: 'es-VE', language: 'es-VE', name: 'Español',   file: 'es-VE.json' },
    ],
  },
  modules: [
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxtjs/i18n',
    '@nuxt/a11y',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
