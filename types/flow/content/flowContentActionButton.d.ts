declare namespace FlowContentActionButton {
  interface IActionButton {
    type: string;
    label: string;
    value: string;
    icon: string;
  }
  export interface IFlowContentActionButtonData
    extends Flow.IContentComponentBase {
    label: string;
    value: string;
    buttons: IActionButton[];
  }
}
