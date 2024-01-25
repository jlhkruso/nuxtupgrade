<template>
  <div class="navigation" :class="{ 'is-active': navIsActive }">
    <v-navigation-drawer permanent color="#435050" height="100%">
      <nav
        class="d-flex flex-column justify-space-between overflow-hidden navigation__list"
        role="navigation"
      >
        <div class="full-height">
          <div class="flex-align-bottom">
            <!-- <LazyNavigationNavLinks
              v-if="navigation"
              :links="navigation.topMenu"
            />
            <LazyNavigationNavLinks
              v-if="navigation"
              :links="navigation.bottomMenu"
            /> -->
          </div>
        </div>
      </nav>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { mainNavigation } from "~/utils/navigation";
export default {
  data: () => ({
    navigation: {},
    navIsActive: false,
  }),
  mounted() {
    this.navigation = mainNavigation(true);
  },
};

// export default Vue.extend({
//   data: () => ({
//     navigation: {},
//     navIsActive: false,
//   }),
//   computed: {
//     // get user
//     getUser() {
//       return this.$store.state.user?.isDigitalCustomer;
//     },
//     // get culture from state
//     getNavState() {
//       this.navIsActive = this.$store.state.layout?.navIsOpen;
//       return this.$store.state.layout?.navIsOpen;
//     },
//     // get culture from state
//     getCulture(): CultureState.ICultureSettings {
//       return this.$store.state.culture?.culture;
//     },
//   },
//   watch: {
//     getNavState(navState: boolean) {
//       this.navIsActive = navState;
//     },
//     getCulture() {
//       this.$fetch();
//     },
//   },
//   mounted() {
//     this.navigation = mainNavigation(this.getUser);
//   },
// });
//
</script>

<style lang="scss" src="./navigation.scss"></style>
