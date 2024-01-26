declare namespace FlowContentPortfolioRecommendations {
  export interface IHeights {
    firstSection: number;
    secondSection: number;
  }
  export interface ILines {
    text: string;
    pct: number;
    miid: string;
  }
  export interface IContainer {
    title: string;
    pct: number;
    lines: ILines[];
  }
  export interface IRecommendation {
    containers: IContainer[];
    textTop: FlowContentText.IFlowContentTextData;
    textBottom: FlowContentText.IFlowContentTextData;
    button: FlowContentButtons.IFlowContentButton;
    title: string;
    note: string;
  }

  export interface IFlowContentPortfolioRecommendationsData
    extends Flow.IContentComponentBase {
    reduced: IRecommendation;
    full: IRecommendation;
  }
}
