<template>
  <v-list-item class="pl-0 pr-0 pt-0 pb-0 nav-link" @click="openModal()">
    <v-hover v-slot="{ hover }">
      <v-list-item-content
        class="d-flex flex-column align-items-center nav-link__content"
        :class="[hover && `nav-link__content--hover`]"
      >
        <v-list-item-icon class="ma-0 align-self-center nav-link__icon">
          <div
            v-if="link.icon"
            v-html="require(`~/assets/svg/${link.icon}.svg?raw`)"
          />
        </v-list-item-icon>
        <v-list-item-title class="nav-link__title">
          <DictionaryItem :translationKey="link.dictionaryKey" />
        </v-list-item-title>
      </v-list-item-content>
    </v-hover>

    <LazyModal ref="signOutdialog" :type="'warning'">
      <template v-slot:header>
        <UIMediumHeadline
          :translationKey="'Signout.Dialog.Title'"
          :customClass="'h1'"
        />
      </template>
      <template v-slot:body>
        <UIMediumHeadline :translationKey="'Signout.Dialog.Text'" />
      </template>
      <template v-slot:actions>
        <v-row>
          <v-col class="flex-end flex-center-sm col-sm-6 col-12">
            <div @click="hideModal()">
              <CTABtn
                :translationKey="'Global.Cancel.Button.Text'"
                :theme="'primary-40'"
                :size="'large'"
              />
            </div>
          </v-col>
          <v-col class="flex-start flex-center-sm col-sm-6 col-12">
            <div @click="signOut()">
              <CTABtn
                :translationKey="'SignOut.Dialog.Button.Text'"
                :size="'large'"
              />
            </div>
          </v-col>
        </v-row>
      </template>
    </LazyModal>
  </v-list-item>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
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
        dictionaryKey: "",
      }),
    },
  },
  methods: {
    // sign out functionality
    signOut() {
      const ctx = this.$nuxt.context as Context;
      ctx.store.commit("user/resetUser");
      ctx.store.commit("flow/clearFlow");

      const baseUrl = ctx.env.BASE_API_URL;
      const setUrl = ctx.$helper.replaceEnvUrl(baseUrl);

      window.location.href = setUrl + "/foundation/authentication/signout";
    },
    openModal() {
      // open modal
      (this.$refs.signOutdialog as any).showModal();
    },
    hideModal() {
      // hide modal
      (this.$refs.signOutdialog as any).hideModal();
    },
  },
});
</script>
