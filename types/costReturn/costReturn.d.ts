declare namespace CostReturn {
  export interface IAccountContext {
    currencyFormat: string;
    pctFormat: string;
  }
  export interface ICost {
    year: number;
    afkast: number;
    afkastTwr: number;
    bruttoAfkast: number;
    bruttoAfkastTwr: number;
    expostCosts: number;
    expostCostsTwr: number;
    formidlingsProvision: number;
    formidlingsProvisionTwr: number;
    rente: number;
    renteTwr: number;
    provision: number;
    provisionTwr: number;
    afkastEfterOmkostningProvision: number;
    afkastEfterOmkostningProvisionTwr: number;
    vederlagFast: number;
    vederlagFastTwr: number;
    vederlagVari: number;
    vederlagVariTwr: number;
    handelsOmkostninger: number;
    handelsOmkostningerTwr: number;
  }

  export interface ICustodyAccount {
    accountContext: IAccountContext;
    costs: ICost[];
  }

  export interface IDateContext {
    currentDate: string;
  }

  export interface IClient {
    custodyAccounts: ICustodyAccount[];
    dateContext: IDateContext;
  }

  export interface IData {
    client: IClient;
  }

  export interface IRootObject {
    data: IData;
  }
}
