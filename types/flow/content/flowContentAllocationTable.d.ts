declare namespace FlowContentAllocationTable {
  export interface ITableRow {
    title: string;
    yourPortfolio: number;
    recommendation: number;
    newPortfolioPct: number;
    newPortfolioAmount: number;
  }
  export interface IDictionaryItems {
    YourPortfolio_Label: string;
    MajBankRecommendation_Label: string;
    NewPortfolio_Label: string;
  }
  export interface IFlowContentAllocationTable
    extends Flow.IContentComponentBase {
    stocksAndOther: ITableRow;
    bondsAndOther: ITableRow;
    cashAmount: ITableRow;
    withdrawCash: ITableRow;
    total: ITableRow;
    dictionaryItems: IDictionaryItems;
  }
}
