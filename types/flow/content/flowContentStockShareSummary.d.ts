declare namespace FlowContentStockShareSummary {
  export interface IGraph {
    x: number;
    y: number;
  }
  export interface IRangeGraph {
    x: number;
    low: number;
    hight: number;
  }
  export interface IAllocatonBar {
    type: string;
    recommendedSpan: string;
    recommendedWeight: string;
    currentWeight: string;
    recommendedMin: number;
    recommendedMax: number;
    recommendedAllocation: number;
    yourAllocation: number;
  }
  export interface IFlowContentStockShareSummaryData
    extends Flow.IContentComponentBase {
    recommendedLabel: string;
    recommendedWeightLabel: string;
    newWeightLabel: string;
    text: string;
    riskButtonLabel: string;
    riskTitle: string;
    riskText: string;
    projectionNote: string;
    estimatedSavingsLabel: string;
    estimatedIntervalLabel: string;
    allocationBar: IAllocatonBar;
    globalCrisisLabel: string;
    estimatedGraph: IGraph[];
    rangeGraph: IRangeGraph[];
    financialGraph: IGraph[];
  }
}
