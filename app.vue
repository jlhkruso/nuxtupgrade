<template>
  <NuxtLayout>
    <v-app>
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
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script>
import { mainNavigation } from "~/utils/navigation";
export default {
  data: () => ({
    navigation: {},
    navIsActive: false,
  }),
  mounted() {
    this.navigation = mainNavigation(this.getUser);
  },
};
</script>
<!-- <style lang="scss" src="./navigation.scss"></style> -->
