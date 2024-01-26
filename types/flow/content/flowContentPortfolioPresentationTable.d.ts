declare namespace FlowContentPortfolioPresentationTable {
  interface IGoal {
    value: string;
    valueType: string;
  }

  interface IContainerLine extends Flow.IContainerLine {
    instrumentId: string;
    yourPortfolioValue: number;
    newPortfolioPct: number;
    newPortfolioValue: number;
    newPortfolioAmount: number;
    yourGoal?: IGoal;
  }
  interface ILinks {
    action: string;
    title: string;
  }
  interface IContainerLines {
    [x: string]: any;
    title: string;
    lines: IContainerLine[];
    summaryLine: IContainerLine;
    textBottom: string;
    actionText: string;
    links: ILinks[];
  }
  export interface IDataObj {
    editAction: string;
    instrumentId: string;
    methodOfChange: string;
    value: number;
  }
  export interface IFlowContentPortfolioPresentationTableData
    extends Flow.IContentComponentBase {
    text: FlowContentText.IFlowContentTextData;
    toggleValueText: string;
    toggleNominelText: string;
    columnNameLabel: string;
    columnRecommendedInstrumentLabel: string;
    keepCurrentQuantityLabel: string;
    columnYourPortfolioLabel: string;
    isRecommendedText: string;
    isNotRecommendedText: string;
    columnNewPortfolioLabel: string;
    columnYourGoalLabel: string;
    containers: IContainerLines[];
    expectedTradingCostText: string;
    expectedTradingCost: number;
    cashwithdrawalLabel: string;
    cashWithdrawal: number;
    summaryLine: IContainerLine;
    mixedProducts: FlowContentText.IFlowContentTextData;
  }
}
