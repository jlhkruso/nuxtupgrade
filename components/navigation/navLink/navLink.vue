<template>
  <div>
    <NavigationBankOptions :link="link" v-if="link.type === 'WebBank'" />
    <template v-else-if="link.type === 'SignOut'">
      <NavigationSignout :link="link" v-if="!isAdvisor" />
    </template>
    <v-list-item
      v-else
      link
      :href="link.linkType === 'external' ? link.linkUrl : null"
      :to="link.linkType === 'internal' ? link.linkUrl : null"
      class="pl-0 pr-0 pt-0 pb-0 nav-link"
      :class="{
        'v-list-item--active':
          link.id === 'products' && isValidInformationParent,
      }"
      :id="link.id"
    >
      <v-hover v-slot="{ hover }">
        <v-list-item-content
          class="d-flex flex-column align-items-center nav-link__content"
          :class="[
            hover && `nav-link__content--hover`,
            active && `nav-link__content--active`,
          ]"
        >
          <v-list-item-icon class="ma-0 align-self-center nav-link__icon">
            <div
              v-if="link.icon"
              v-html="require(`~/assets/svg/${link.icon}.svg?raw`)"
            />

            <LazyNavigationNotificationIndicator
              v-if="link.type === 'MessageIndicatorMenuItem'"
            />
          </v-list-item-icon>
          <v-list-item-title class="nav-link__title">
            <DictionaryItem :translationKey="link.dictionaryKey" />
          </v-list-item-title>
        </v-list-item-content>
      </v-hover>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
      return this.$store.state.user?.isDigitalUser;
    },
    isAdvisor(): boolean {
      return this.$store.state.user?.isAdvisor;
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
      const route = this.$nuxt.$route;
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
});
</script>
<style src="./navLink.scss" lang="scss"></style>
