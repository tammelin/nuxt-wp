// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      wpJsonUrl: process.env.WP_JSON_URL,
    }
  },
})
