declare namespace FlowContentProductGroup {
  interface IFlowContentProduct {
    name: string;
    linkTitle: string;
    linkUrl: string;
    approved: boolean;
    approvedText: string;
  }
  export interface IFlowContentProductGroupData
    extends Flow.IContentComponentBase {
    products: IFlowContentProduct[];
    displayApprovalStatus: boolean;
  }
}
