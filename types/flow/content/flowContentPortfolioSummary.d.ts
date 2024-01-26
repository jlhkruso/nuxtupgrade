declare namespace FlowContentPortfolioSummary {
  interface ILine {
    instrumentId: string;
    name: string;
    isin: string;
    recommendedString: string;
    weight: number;
    nominal: number;
    value: number;
    tradeOption: String;
  }
  interface IGroup {
    lines: ILine[];
    stocks: IInstruments;
    bonds: IInstruments;
    cash: IInstruments;
  }
  interface IInstruments {
    groups: IGroup[];
    lines: ILine[];
    name: string;
    weight: number;
    value: number;
  }
  interface ITotal {
    name: string;
    weight: number;
    value: number;
  }
  interface ITabContent {
    total: ITotal;
    stocks: IInstruments;
    bonds: IInstruments;
    cash: IInstruments;
    sell: IInstruments[];
    buy: IInstruments[];
    rowLabelSell: string;
    rowLabelBuy: string;
    mixedProducts: FlowContentText.IFlowContentTextData;
  }
  interface ITabContentSell {
    sell: ILine[];
    buy: ILine[];
  }
  interface IKeys {
    buySellLabel: string;
    isinLabel: string;
    marketValueLabel: string;
    nameLabel: string;
    quantityLabel: string;
    recommendedLabel: string;
    tradingValueLabel: string;
    weightLabel: string;
  }
  interface IFlowContentPortfolioSummaryData
    extends Flow.IContentComponentBase {
    recommendedLabel: string;
    recommendedWeightLabel: string;
    newWeightLabel: string;
    text: string;
    type: string;
    title: string;
    note: string;
    currentTabName: string;
    newTabName: string;
    buySellTabName: string;
    nameLabel: string;
    isinLabel: string;
    weightLabel: string;
    quantityLabel: string;
    marketValueLabel: string;
    buySellLabel: string;
    tradingValueLabel: string;
    newTabNoteTop: string;
    newTabNoteBottom: string;
    currentTabNoteTop: string;
    currentTabNoteBottom: string;
    buySellTabNoteTop: string;
    buySellTabNoteBottom: string;
    outsideProfile: FlowContentText.IFlowContentTextData;
    mixedProducts: FlowContentText.IFlowContentTextData;
    nonRecommendedProducts: FlowContentText.IFlowContentTextData;
    currentPortfolio: ITabContent;
    newPortfolio: ITabContent;
    trades: ITabContentSell;
  }
}
