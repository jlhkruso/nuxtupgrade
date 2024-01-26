declare namespace Flow {
  interface IFlow {
    accountId: string;
    accountNumber: string;
    profile: number;
    investmentType: string;
    adviseable: boolean;
    totalValue: number;
    accountName: string;
    horizon: number;
    newProfile?: any;
    newHorizon?: any;
    matchesRecommendation: boolean;
    accountTypeId: string;
    isDigital: boolean;
    initiationUrl: string;
    userId: string;
    logs: string[];
    pageRef: string;
    totalSteps: number;
    flowName?: any;
    subFlow?: any;
    parrentFlow?: any;
  }

  export interface IContentComponentBase {
    title: string;
    note: FlowContentText.IFlowContentTextData | string;
    type: string;
    flowName?: string;
    url?: string;
    dictionaryItems?: Object;
  }
  export interface IPresentation {
    components: { RedirectUrl: string };
    presentationRoute: string;

    content: Array<any>;
  }
  interface IFlowMetaFormatContext {
    currencyFormat: string;
    pctFormat: string;
    yearsFormat: string;
    pctProAnnoFormat: string;
    currencyLabel: string;
    nominalFormat: string;
    nominalLabel: string;
  }
  export interface IFlowMeta {
    AccountNumber: string;
    FormatContext: IFlowMetaFormatContext;
    Replacements: Global.IKeyValuePairWithFormat[];
  }
  export interface IRootObject {
    status: string;
    instanceId: string;
    data: any;
    flow: IFlow;
    presentation: IPresentation;
    meta: IFlowMeta;
  }
  export interface IFlowAction {
    action: string;
    stepData?: any;
    showOverlay?: boolean;
  }
  export interface IContainerLine {
    text: string;
    miid: string;
    recommended: boolean;
    recommendedAmount: number;
    recommendedPct: number;
    yourPortfolioPct: number;
    yourPortfolioAmount: number;
    recommendedString: string;
  }
}
