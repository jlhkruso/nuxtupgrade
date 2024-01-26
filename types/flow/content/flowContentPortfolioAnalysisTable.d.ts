declare namespace FlowContentPortfolioAnalysisTable {
  export interface IPortfolioAnalysisTableDictionaryItems {
    columnRecommendedLabel: string;
    columnYourPortfolioLabel: string;
    columnNewPortfolioLabel: string;
  }
  export interface IPortfolioAnalysisTableLine {
    miid: string;
    text: string;
    yourPortfolioPct: number;
    recommendedPortfolioPct: number;
    newPortfolioPct: number;
  }
  export interface IPortfolioAnalysisTableContainers {
    lines: IPortfolioAnalysisTableLine[];
    text: string;
    yourPortfolioPct: number;
    recommendedPortfolioPct: number;
    newPortfolioPct: number;
  }
  export interface IPortfolioAnalysisTableContainer {
    containers: IPortfolioAnalysisTableContainers[];
    text: string;
    yourPortfolioPct: number;
    recommendedPortfolioPct: number;
    newPortfolioPct: number;
  }
  export interface IPortfolioAnalysisTableContainers {
    containers: IPortfolioAnalysisTableContainer[];
  }
  export interface FlowContentPortfolioAnalysisTableData
    extends Flow.IContentComponentBase {
    text: FlowContentText.IFlowContentTextData;
    columnRecommendedLabel: string;
    columnYourPortfolioLabel: string;
    columnNewPortfolioLabel: string;
    instrumentTypes: IPortfolioAnalysisTableContainers[];
  }
}
