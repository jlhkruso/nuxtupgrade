declare namespace ProfileAccount {
  export interface IChoices {
    profileNumber: number;
    horizon: number;
    pdfUrl: string;
    strategyLastModified: string;
    profileLastModified: string;
  }

  export interface IAccountContext {
    currencyFormat: string;
    yearsFormat: string;
  }
  export interface ICustodyAccountType {
    isLifeAnnuity: string;
    isDigitalAccount: string;
    isDigitalCashOnly: string;
  }
  export interface ICustodyAccount {
    name: string;
    custodyAccountValue: number;
    choices: IChoices;
    accountContext: IAccountContext;
    custodyAccountType: ICustodyAccountType;
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
