export default defineNuxtConfig({
  ssr: true,

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  runtimeConfig: {
    public: {},
  },

  imports: {
    dirs: [
      'components/**/(use)**.ts',
    ],
  },

  components: [{
    path: '~/components',
    extensions: ['vue'],
  }],

  experimental: {
    emitRouteChunkError: 'automatic',
  },

  typescript: {
    strict: true,
    shim: false,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: [
      'defineStore',
    ],
  },

  tailwindcss: {
    viewer: false,
  },

  devtools: {
    enabled: true,
  },
})
