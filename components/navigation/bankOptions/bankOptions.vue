<template>
  <div v-if="!$fetchState.pending">
    <v-list-item
      v-if="bankOptions && bankOptions.accessible"
      :href="bankOptions.links.length === 1 ? bankOptions.links[0].url : null"
      :target="bankOptions.links.length === 1 ? '_blank' : null"
      class="pl-0 pr-0 pt-0 pb-0 nav-link"
      v-on="bankOptions.links.length === 2 ? { click: () => openModal() } : {}"
    >
      <v-hover v-slot="{ hover }">
        <v-list-item-content
          class="d-flex flex-column align-items-center nav-link__content"
          :class="[hover && `nav-link__content--hover`]"
        >
          <v-list-item-icon class="ma-0 align-self-center nav-link__icon">
            <div
              v-if="link.icon"
              v-html="require(`~/assets/icons/${link.icon}.svg?raw`)"
            />
          </v-list-item-icon>
          <v-list-item-title class="nav-link__title">
            <DictionaryItem :translationKey="link.dictionaryKey" />
          </v-list-item-title>
        </v-list-item-content>
      </v-hover>

      <LazyModal ref="dialogBankOptions" :type="'warning'">
        <template v-slot:header>
          <UIMediumHeadline
            :translationKey="'Webbank.SelectDialog.Title'"
            :customClass="'h1'"
          />
        </template>
        <template v-slot:body>
          <UIMediumHeadline :translationKey="'Webbank.SelectDialog.Text'" />
        </template>
        <template v-slot:actions>
          <div v-if="bankOptions.links.length > 1">
            <v-row>
              <v-col
                class="col-12 col-sm-6 flex-center-small"
                :class="index === 0 ? 'flex-end' : 'flex-start'"
                v-for="(btn, index) in bankOptions.links"
                :key="index"
              >
                <div @click="hideModal()">
                  <CTABtn :text="btn.title" :href="btn.url" :size="'large'" />
                </div>
              </v-col>
            </v-row>
          </div>
          <v-row>
            <v-col class="flex-center-sm col-12">
              <div @click="hideModal()">
                <CTABtn
                  :translationKey="'Global.Cancel.Button.Text'"
                  :theme="'primary-40'"
                  :size="'large'"
                />
              </div>
            </v-col>
          </v-row>
        </template>
      </LazyModal>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GET_BANK_OPTIONS } from "~/graphql/navigation/bankOptions";
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
  data: () => ({
    bankOptions: null,
  }),
  async fetch() {
    if (!this.bankOptions) {
      const data = await this.$nuxt.context.$graphQLBasic.getData(
        GET_BANK_OPTIONS
      );
      if ((data as BankOptionsQuery.IQuery).bankOptions) {
        this.bankOptions = data.bankOptions;
      }
    }
  },
  methods: {
    openModal() {
      // open modal
      (this.$refs.dialogBankOptions as any).showModal();
    },
    hideModal() {
      // hide modal
      (this.$refs.dialogBankOptions as any).hideModal();
    },
  },
});
</script>
