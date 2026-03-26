import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["shadcn-nuxt", "@nuxt/fonts", "@nuxt/icon", "motion-v/nuxt"],
  fonts: {
    provider: "fontsource",
    defaults: {
      weights: ["100 900"],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
    },
  },
  icon: {
    mode: "svg",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
