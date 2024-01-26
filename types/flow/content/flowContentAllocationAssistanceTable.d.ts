declare namespace FlowContentAllocationAssistanceTable {
  export interface IContainer {
    title: string;
    lines: Flow.IContainerLine[];
    summaryLine: Flow.IContainerLine;
  }
  export interface IDictionaryItems {
    columnNameLabel: string;
    columnRecommendedInstrumentLabel: string;
    columnRecommendedAllocationLabel: string;
    columnYourAllocationLabel: string;
  }

  export interface IFlowContentAllocationAssistanceTableData
    extends Flow.IContentComponentBase {
    columnNameLabel: string;
    columnRecommendedInstrumentLabel: string;
    columnRecommendedAllocationLabel: string;
    isNotRecommendedText: string;
    isRecommendedText: string;
    columnYourAllocationLabel: string;
    cashwithdrawalLabel: string;
    cashWithdrawal: number;
    containers: IContainer[];
    totals: Flow.IContainerLine;
    selectRecommendedButton: FlowContentButtons.IFlowContentButton;
    selectYourButton: FlowContentButtons.IFlowContentButton;
  }
}
