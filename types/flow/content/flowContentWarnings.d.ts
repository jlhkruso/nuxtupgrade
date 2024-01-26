declare namespace FlowContentWarnings {
  export interface IFlowContentWarningsData extends Flow.IContentComponentBase {
    list: Warnings.IWarning[];
    text: string;
  }
}
