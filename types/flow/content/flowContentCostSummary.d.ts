declare namespace FlowContentCostSummary {
  interface ICost {
    value: number;
    percentage: number;
  }
  interface IKeys {
    title: string;
    notesTopText: string;
    buttonShowText: string;
    buttonHideText: string;
    annualCostsLabel: string;
    clientBonusLabel: string;
    tradingCostsLabel: string;
  }
  interface ISummary {
    annualCosts: ICost;
    clientBonus: ICost;
    tradingCosts: ICost;
  }

  interface IFeesKeys {
    annualCostsTitle: string;
    toggleValueLabel: string;
    togglePercentageLabel: string;
    columnNameLabel: string;
    columnInvestedAmountLabel: string;
    columnCostsGroupLabel: string;
    columnGrossLabel: string;
    columnClientBonusLabel: string;
    columnNetLabel: string;
    columnCostsProductLabel: string;
    columnCostsDistributionFeeLabel: string;
    columnCostsBankLabel: string;
    rowSubTotalNewPortfolioLabel: string;
    rowSubTotalCurrentPortfolioLabel: string;
    costsAnnualCostsNoteText: string;
    columnTradingAmountLabel: string;
    columnTradingCostsGroupLabel: string;
    columnTradingCostsProductLabel: string;
    columnTradingCostsBankLabel: string;
  }
  interface ILine {
    tradeValue: number;
    instrumentId: string;
    name: string;
    value: number;
    product: ICost;
    distribution: ICost;
    bank: ICost;
    gross: ICost;
    clientBonus: ICost;
    net: ICost;
  }
  interface IFeesList {
    tradingCostsTitle: String;
    tradingCostsNote: string;
    annualCostsTitle: string;
    toggleValueLabel: string;
    togglePercentageLabel: string;
    columnNameLabel: string;
    columnInvestedAmountLabel: string;
    columnCostsGroupLabel: string;
    columnGrossLabel: string;
    columnClientBonusLabel: string;
    columnNetLabel: string;
    columnCostsProductLabel: string;
    columnCostsDistributionFeeLabel: string;
    columnCostsBankLabel: string;
    rowSubTotalNewPortfolioLabel: string;
    rowSubTotalCurrentPortfolioLabel: string;
    costsAnnualCostsNoteText: string;
    newPortfolioSum: ILine;
    newPortfolioLines: ILine[];
    currentPortfolioLines: ILine[];
    currentPortfolioSum: ILine;
    total: ILine;
    totalSale: ILine;
    totalBuy: ILine;
    saleLines: ILine[];
    buyLines: ILine[];
    columnTradingAmountLabel: string;
    columnTradingCostsGroupLabel: string;
    columnTradingCostsProductLabel: string;
    columnTradingCostsBankLabel: string;
    rowTotalLabel: string;
    sellSubTotalLabel: string;
    buySubTotalLabel: string;
  }
  interface IFlowContentCostSummaryData extends Flow.IContentComponentBase {
    notesTopText: string;
    buttonShowText: string;
    buttonHideText: string;
    annualCostsLabel: string;
    clientBonusLabel: string;
    tradingCostsLabel: string;
    summary: ISummary;
    annual: IFeesList;
    tradingCosts: IFeesList;
  }
}
