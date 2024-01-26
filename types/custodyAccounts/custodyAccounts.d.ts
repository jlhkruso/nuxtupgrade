declare namespace CustodyAccounts {
  export interface IProfile {
    recommendedStock: number;
    minStock: number;
    maxStock: number;
  }
  export interface IChoices {
    profileNumber: number;
    profile: IProfile;
  }
  export interface IWarning {
    message: string;
    warningType: string;
    modal: Object;
    properties: Global.IKeyValuePair[];
  }
  export interface IXray {
    sortOrder: number;
    name: string;
    key: string;
    weight: number;
  }
  export interface IAccountContext {
    currencyFormat: string;
    pctFormat: string;
  }
  export interface ICustodyAccountType {
    isDigitalAccount: boolean;
    isLifeAnnuity: boolean;
    isDigitalCashOnly: boolean;
  }
  export interface ICustodyAccount {
    id: string;
    name: string;
    custodyAccountValue: number;
    choices: IChoices;
    custodyAccountType: ICustodyAccountType;
    warnings: IWarning[];
    xray_asset: IXray[];
    xray?: IXray[];
    accountContext: IAccountContext;
  }

  export interface ICustodyAccountHolding {
    miid: string;
    instrument: Instruments.INode;
    nominalAmount: number;
    price: number;
    isForeignCurrency: boolean;
    currency: string;
    value: number;
    sortName: string;
  }
  export interface ICustodyAccountXray {
    sortOrder: number;
    name: string;
    key: string;
    weight: number;
    value: number;
    holdings: ICustodyAccountHolding[];
  }

  export interface IClient {
    custodyAccounts: ICustodyAccount[];
    dateContext: { currentDate: string };
  }

  export interface IData {
    client: IClient;
  }

  export interface IRootObject {
    data: IData;
  }
}
