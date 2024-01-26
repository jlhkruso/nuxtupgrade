// import this after install `@mdi/font` package
// import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: false,
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#435050",
            primary40: "#dfe7e2",
            accent: "#dbdbdb",
            secondary: "#75bfa1",
            warning: "#e0c301",
            error: "#cc4d4c",
            success: "#7dac47",
          },
        },
      },
    },
    components,
    directives,
  });
  nuxtApp.vueApp.use(vuetify);
});
