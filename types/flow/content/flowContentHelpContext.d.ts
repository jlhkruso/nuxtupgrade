declare namespace FlowContentHelpContext {
  interface FlowContentHelpContextData extends Flow.IContentComponentBase {
    date: string;
    accountName: string | null;
    helpDetails: {
      label: string;
      slug: string;
    };
  }
}
