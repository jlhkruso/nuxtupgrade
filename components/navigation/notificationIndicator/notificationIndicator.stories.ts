/* @ts-ignore */
import { GET_UNREAD_MESSAGES } from "~/graphql/navigation/unreadMessages";
export default {
  title: "Components/Notification Indicator",
  argTypes: {
    unreadMessages: {
      description: `<pre>${GET_UNREAD_MESSAGES}</pre>`,
    },
  },
};
// @ts-ignore
const Template = (_args: Object, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <div class="nav-link__icon">
  <img src="/icons/icon_messages.svg" />
  <div class="nav-link__notification-placer">
    <div class="notification-indicator">{{unreadMessages}}</div>
  </div>
</div>`,
});

export const NotificationIndicator = Template.bind({});
// @ts-ignore
NotificationIndicator.args = {
  unreadMessages: 4,
};
