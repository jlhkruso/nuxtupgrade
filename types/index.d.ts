import "@nuxt/types";

declare module "@nuxt/types" {
  interface Context {
    $helper: urlToTitle; // Replace YourHelperType with the actual type of your helper
  }

  interface NuxtAppOptions {
    $helper: urlToTitle; // Same here
  }

  // If you're using Nuxt 3, you might need to extend NuxtApp instead:
  interface NuxtApp {
    $helper: urlToTitle; // Same here
  }
}
