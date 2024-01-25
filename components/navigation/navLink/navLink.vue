<template>
  <div>
    <template v-if="link.type === 'WebBank'">
      <div></div>
      <!-- <NavigationBankOptions :link="link" /> -->
    </template>

    <template v-else-if="link.type === 'SignOut'">
      <div></div>
      <!-- <NavigationSignout :link="link" v-if="!isAdvisor" /> -->
    </template>
    <v-list-item
      v-else
      :href="link.linkType === 'external' ? link.linkUrl : undefined"
      :to="link.linkType === 'internal' ? link.linkUrl : undefined"
      class="pl-0 pr-0 pt-0 pb-0 nav-link"
      :class="{
        'v-list-item--active':
          link.id === 'products' && isValidInformationParent,
      }"
      :id="link.id"
    >
      <v-hover v-slot="{ hover }">
        <div
          class="d-flex flex-column align-items-center nav-link__content"
          :class="[
            hover && 'nav-link__content--hover',
            active && 'nav-link__content--active',
          ]"
        >
          <v-list-img class="ma-0 align-self-center nav-link__icon">
            <nuxt-icon v-if="link.icon" :name="link.icon" filled />
            <!-- <div
              v-if="link.icon"
              v-html="require(`@/assets/svg/${link.icon}.svg?raw`)"
            /> -->

            <!-- <LazyNavigationNotificationIndicator
              v-if="link.type === 'MessageIndicatorMenuItem'"
            /> -->
          </v-list-img>
          <v-list-item-title class="nav-link__title">
            <!-- <DictionaryItem :translationKey="link.dictionaryKey" /> -->
          </v-list-item-title>
        </div>
      </v-hover>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
export default {
  props: {
    link: {
      type: Object as () => Navigation.INavLinkProps,
      default: () => ({
        title: "",
        icon: "",
        linkUrl: "",
        type: "",
      }),
    },
  },
  data() {
    return {
      isValidInformationParent: false,
    };
  },
  computed: {
    active(): boolean {
      const isActive = this.$route.path === this.link.linkUrl;
      return isActive;
    },
    isDigitalUser(): boolean {
      // return this.$store.state.user?.isDigitalUser;
      return true;
    },
    isAdvisor(): boolean {
      // return this.$store.state.user?.isAdvisor;
      return true;
    },
  },
  mounted() {
    if (this.validCondition()) {
      this.setActiveClass();
    } else {
      this.isValidInformationParent = false;
    }
  },
  watch: {
    $route() {
      if (this.validCondition()) {
        this.setActiveClass();
      } else {
        this.isValidInformationParent = false;
      }
    },
  },
  methods: {
    validCondition(): boolean {
      const route = useRoute();
      return !this.isDigitalUser && route.name === "information-slug"
        ? true
        : false;
    },
    setActiveClass() {
      // handle active class to information pages under products page
      if (this.$el.children[0] && this.$el.children[0].id === "products") {
        this.isValidInformationParent = true;
      } else {
        this.isValidInformationParent = false;
      }
    },
  },
};
</script>
<style src="./navLink.scss" lang="scss"></style>
