<template>
  <div class="notification-indicator" v-if="!$fetchState.pending">
    {{ unreadMessages }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { GET_UNREAD_MESSAGES } from "~/graphql/navigation/unreadMessages";
export default Vue.extend({
  computed: {
    ...mapState("user", ["unreadMessages"]),
  },
  async fetch() {
    const getUnreadMessages = await this.$nuxt.context.$graphQLBasic.getData(
      GET_UNREAD_MESSAGES
    );

    if (getUnreadMessages && getUnreadMessages.summary) {
      this.setUnreadMessagesCount(getUnreadMessages.summary.noOfUnreadMessages);
    }
  },
  methods: {
    ...mapMutations("user", ["setUnreadMessagesCount"]),
  },
});
</script>
<style src="./notificationIndicator.scss" lang="scss"></style>
