declare namespace FlowContentProductGroupRisks {
  export interface IProductGroup {
    name: string;
    description: string;
  }
  export interface IFlowContentProductGroupRisksData
    extends Flow.IContentComponentBase {
    text: string;
    productGroups: IProductGroup[];
  }
}
