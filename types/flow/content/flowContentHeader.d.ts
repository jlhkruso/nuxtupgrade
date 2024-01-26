declare namespace FlowContentHeader {
  interface IFlowContentStep {
    active: boolean;
    value: number;
  }

  export interface IFlowContentHeaderData extends Flow.IContentComponentBase {
    steps: IFlowContentStep[];
  }
}
