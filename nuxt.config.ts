// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxthq/studio"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-12-12",
});
