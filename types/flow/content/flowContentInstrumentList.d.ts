declare namespace FlowContentInstrumentList {
  export interface IFlowContentSearchDictionaryItems {
    ButtonInstrumentAddText: string;
    ButtonInstrumentCancelText: string;
    ButtonInstrumentInPortfolioText: string;
    IsRecommendedText: String;
    ButtonInstrumentRemoveText: string;
  }
  export interface IFlowContentSearchInstrumentAction {
    id: string;
    action: string;
    temp: IFlowContentSearchInstrument | null;
  }

  export interface IFlowContentSearchInstrument {
    id: string;
    text: string;
    miid: string;
    category?: string;
    rate?: number;
    currency?: string;
    isInPortFolio: boolean;
    isRecommended: boolean;
    recommendedString: string;
  }
  export interface IFlowContentSearchInstruments {
    title: String;
    hint: string;
    results?: IFlowContentSearchInstrument[];
    instruments?: IFlowContentSearchInstrument[];
  }
  export interface IDictionaryItems {
    ButtonInstrumentAddText: string;
    ButtonInstrumentCancelText: string;
    ButtonInstrumentInPortfolioText: string;
    ColumnNameLabel: string;
    ColumnCategoryLabel: string;
    ColumnRecommendedLabel: string;
    ColumnPriceLabel: string;
    ColumnCurrencyLabel: string;
    ColumnAddPortfolioLabel: string;
  }
  export interface IFlowContentInstrumentListData
    extends Flow.IContentComponentBase {
    dictionaryItems: IDictionaryItems;
    columnNameLabel: string;
    columnCategoryLabel: string;
    columnRecommendedLabel: string;
    columnPriceLabel: string;
    columnCurrencyLabel: string;
    columnAddPortfolioLabel: string;
    instrumentSearch: IFlowContentSearchInstruments;
    containers: any;
    textTop: FlowContentText.IFlowContentTextData;
    textBottom: FlowContentText.IFlowContentTextData;
  }
}
