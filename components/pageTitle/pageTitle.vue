<template>
  <div v-if="showPageTitle" class="page-title d-flex">
    <div v-if="isAnalysisPage" class="page-title__bankbox"></div>
    <h6
      class="page-title__text flex-center full-height"
      :class="isAnalysisPage && 'page-title__text--has-bankbox'"
    >
      <template v-if="translationKey">
        <!-- <DictionaryItem :translationKey="translationKey" /> -->
      </template>
      <template v-else-if="currentPageTitle">
        {{ currentPageTitle }}
      </template>
    </h6>

    <button class="page-title__toggle-nav-button" @click="toggleNav">
      <div class="burger-icon" :class="{ 'is-active': navIsActive }">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { useLayouteStore } from "~/stores/layout";
export default {
  data: () => ({
    showPageTitle: true,
    navIsActive: false,
    currentPageTitle: "",
  }),
  props: {
    translationKey: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
  methods: {
    toggleNav() {
      const layoutStore = useLayouteStore();
      layoutStore.toggleNav();
      this.navIsActive = !this.navIsActive;
    },
    setTitle() {
      if (this.title) {
        this.currentPageTitle = this.title;
      } else {
        const { $helper } = useNuxtApp();
        const route = useRoute();
        const nameFromRoute = route.name as string;
        this.currentPageTitle = $helper.urlToTitle(nameFromRoute);
      }
    },
  },
  mounted() {
    this.setTitle();
  },
  // methods: {
  //   toggleNav() {
  //     this.$store.commit("layout/toggleNav");
  //     this.navIsActive = !this.navIsActive;
  //   },
  //   setTitle() {
  //     if (this.title) {
  //       this.currentPageTitle = this.title;
  //     } else {
  //       const nuxtContext = this.$nuxt.context;
  //       const nameFromRoute = this.$nuxt.$route.name as string;
  //       this.currentPageTitle = nuxtContext.$helper.urlToTitle(nameFromRoute);
  //     }
  //   },
  // },
  // watch: {
  //   $route() {
  //     if (window.innerWidth <= 999) {
  //       if (this.navIsActive) {
  //         setTimeout(() => {
  //           this.navIsActive = false;
  //         }, 200);
  //       }
  //     }
  //   },
  // },
  // mounted() {
  //   this.setTitle();
  // },
  // computed: {
  //   isAnalysisPage(): boolean {
  //     const nuxtPath = this.$nuxt.$route.path;
  //     return !!nuxtPath.includes("/my-picture");
  //   },
  // },
};
</script>
<style lang="scss" src="./pageTitle.scss" scoped></style>
