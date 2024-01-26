import { useRouter } from "vue-router";
import { nextTick } from "vue";
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  const addListeners = (links: HTMLElement[]) => {
    for (let i = 0; i < links.length; i++) {
      const target = links[i].getAttribute("target");
      if (target && target === "_blank") {
        const rel = links[i].getAttribute("rel");
        const attributes = rel ? rel + " noopener" : "noopener";
        links[i].setAttribute("rel", attributes);
      }
      links[i].addEventListener("click", navigate, false);
    }
  };

  const navigate = (event: MouseEvent) => {
    const e = event.currentTarget as HTMLElement;
    const target = e.getAttribute("target");
    const href = e.getAttribute("href");
    if (href && href[0] === "/" && target !== "_blank") {
      const split = href.split("/");
      if (split[1] === "majworld") {
        const mwHref = href.replace("/majworld/", "/");
        event.preventDefault();
        event.metaKey
          ? window.open(mwHref, "_blank", "noopener")
          : router.push(mwHref);
      }
    }
  };

  nuxtApp.vueApp.directive("custominterpolation", {
    mounted(el) {
      let links = el.getElementsByTagName("a");

      const addListeners = (links: HTMLElement[]) => {
        for (let i = 0; i < links.length; i++) {
          const target = links[i].getAttribute("target");
          if (target && target === "_blank") {
            const rel = links[i].getAttribute("rel");
            const attributes = rel ? rel + " noopener" : "noopener";
            links[i].setAttribute("rel", attributes);
          }
          links[i].addEventListener("click", navigate, false);
        }
      };

      const removeListeners = (links: HTMLElement[]) => {
        for (let i = 0; i < links.length; i++) {
          links[i].removeEventListener("click", navigate, false);
        }
      };

      addListeners(links);
      el._removeListeners = () => removeListeners(links);
    },

    updated(el) {
      el._removeListeners();
      nextTick(() => {
        let links = el.getElementsByTagName("a");
        addListeners(links);
      });
    },

    beforeUnmount(el) {
      el._removeListeners();
    },
  });
});
