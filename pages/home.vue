<template>
  <v-main>
    <PageTitle :title="pageTitle" />
    <v-container>
      <v-row>
        <v-col>
          <h1>frontpage s dsdfsdf</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
// import { Context } from "@nuxt/types/app";
// import { MetaInfo } from "vue-meta";
// import setTitle from "~/utils/headTitle";
export default {
  // middleware: ["routeQuery", "user"],
  // head(): MetaInfo {
  //   return {
  //     title: setTitle(this.title as string),
  //   };
  // },
  data: () => ({
    title: "",
    pageTitle: "",
  }),
  mounted() {
    this.title = "this.title";
    this.pageTitle = "this.pageTitle";
  },
  // async asyncData({ $dictionary }: Context) {
  //   const navTitle = (
  //     (await $dictionary.getSingleDictionaryItem(
  //       "Overview.Navigation.Title"
  //     )) as CMS.IResponse
  //   ).data.items![0];
  //   const featureTitle = (
  //     (await $dictionary.getSingleDictionaryItem(
  //       "Overview.Title"
  //     )) as CMS.IResponse
  //   ).data.items![0];

  //   return {
  //     title: navTitle.value ? navTitle.value : navTitle.key,
  //     pageTitle: featureTitle.value ? featureTitle.value : featureTitle.key,
  //   };
  // },
};
</script>
