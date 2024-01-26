declare namespace FlowContentButtons {
  export interface IFlowContentButton {
    label: string;
    action: string;
    type: number;
    value: string;
  }
  export interface IFlowContentButtonsData extends Flow.IContentComponentBase {
    previous?: IFlowContentButton;
    next: IFlowContentButton;
  }
}
