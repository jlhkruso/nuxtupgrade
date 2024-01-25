import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/styles/main.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  devtools: { enabled: true },

  // vuetify module configuration
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@pinia/nuxt",
    "nuxt-icons",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: resolve(
                "assets/styles/overwrites/vuetify-settings.scss"
              ),
            },
          })
        );
      });
    },
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: "@use '@/assets/styles/config/variables.scss' as *;",
        },
      },
    },
  },
  ssr: false,
  // handle nested composables
  imports: {
    dirs: ["composables", "composables/**"],
  },
});
