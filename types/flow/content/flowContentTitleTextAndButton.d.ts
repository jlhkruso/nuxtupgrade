declare namespace FlowContentTitleTextAndButton {
  export interface IFlowContentTitleTextAndButtonData
    extends Flow.IContentComponentBase {
    text: FlowContentText.IFlowContentTextData;
    button: FlowContentButtons.IFlowContentButton;
  }
}
