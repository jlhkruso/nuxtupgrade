declare namespace FlowContentProfileVisualization {
  export interface IFlowContentProfile {
    isCurrentProfile: boolean;
    isRecommendedProfile: boolean;
    number: number;
    stockPercentage: number;
    bondPercentage: number;
    estimatedValueStart: number;
    estimatedValueEnd: number;
    return: number;
    riskMin: number;
    riskMax: number;
  }
  export interface IFlowContentProfileGraph {
    x: number;
    y: number;
  }
  export interface IFlowContentProfileRangedGraph {
    x: number;
    low: number;
    high: number;
  }
  export interface IFlowContentProfileVisualizationKeys {
    BondsLabel: string;
    ChooseProfileLabel: string;
    CurrentLabel: string;
    EndLabel: string;
    MaxLabel: string;
    MinLabel: string;
    RecommendedLabel: string;
    ReturnLabel: string;
    ReturnTitle: string;
    RiskLabel: string;
    StartLabel: string;
    StockLabel: string;
    TableLabel: string;
    VisualLabel: string;
    EstimatedSavingsLabel: string;
    EstimatedIntervalLabel: string;
    GlobalCrisisLabel: string;
  }

  export interface IFlowContentProfileVisualizationData
    extends Flow.IContentComponentBase {
    profiles: IFlowContentProfile[];
    estimatedGraph: IFlowContentProfileGraph[];
    rangeGraph: IFlowContentProfileRangedGraph[];
    financialGraph: IFlowContentProfileGraph[];
    dictionaryItems: IFlowContentProfileVisualizationKeys;
    tableText: FlowContentText.IFlowContentTextData;
    graphText: FlowContentText.IFlowContentTextData;
  }
}
