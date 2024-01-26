declare namespace CustodyAccount {
  export interface IXray {
    sortOrder: number;
    name: string;
    key: string;
    weight: number;
    holdings: CustodyAccounts.ICustodyAccountHolding[];
  }

  export interface IChoices {
    profileNumber: number;
  }
  export interface IAccountContext {
    currencyFormat: string;
    pctFormat: string;
  }
  export interface ICustodyAccount {
    name: string;
    custodyAccountValue: number;
    xray: IXray[];
    choices: IChoices;
    accountContext: IAccountContext;
  }

  export interface IClient {
    custodyAccounts: ICustodyAccount[];
  }

  export interface IData {
    client: IClient;
  }

  export interface IRootObject {
    data: IData;
  }
}
