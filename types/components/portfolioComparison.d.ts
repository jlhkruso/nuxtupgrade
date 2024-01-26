declare namespace PortfolioComparison {
  export interface IInstrument2 {
    miid: string;
    name: string;
  }

  export interface IInstrument {
    weight: number;
    value: number;
    instrument: IInstrument2;
    sortName: string;
  }

  export interface ICategory {
    sortOrder: number;
    name: string;
    weight: number;
    value: number;
    recommendedWeight: number;
    recommendedValue: number;
    instruments: IInstrument[];
  }

  export interface IXray {
    sortOrder: number;
    name: string;
    weight: number;
    value: number;
    key: string;
    recommendedWeight: number;
    recommendedValue: number;
    categories: ICategory[];
  }
  export interface IAccountContext {
    currencyFormat: string;
    pctFormat: string;
  }
  export interface CustodyAccount {
    xray: IXray[];
    accountContext: IAccountContext;
  }

  export interface IClient {
    custodyAccounts: CustodyAccount[];
  }

  export interface IData {
    client: IClient;
  }

  export interface IRootObject {
    data: IData;
  }
}
