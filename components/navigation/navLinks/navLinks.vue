<template>
  <v-list class="pa-0 nav-links">
    <NavigationNavLink
      v-for="(item, index) in links"
      :key="index"
      :link="item"
    />
  </v-list>
</template>

<script lang="ts">
export default {
  props: {
    links: {
      type: Array as () => Navigation.INavLinkProps[],
      default: null,
    },
  },
};
</script>
