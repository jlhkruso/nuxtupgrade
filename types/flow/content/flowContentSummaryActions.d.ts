declare namespace FlowContentSummaryActions {
  interface IPdfAtion extends FlowContentButtons.IFlowContentButton {
    fileType: string;
  }
  interface IFlowContentSummaryActionsData extends Flow.IContentComponentBase {
    actionBankButton: FlowContentButtons.IFlowContentButton;
    pdfButton: IPdfAtion;
    text: string;
  }
}
