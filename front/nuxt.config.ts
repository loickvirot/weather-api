// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: "",
    },
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vesp/nuxt-fontawesome", "nuxt-security"],

  fontawesome: {
    icons: {
      solid: ["arrow-left", "arrow-right", "circle-info"],
    },
  },
});
