declare module InstrumentDetails {
  export interface ICategory2 {
    name: string;
    parentName: string;
  }

  export interface ICategory {
    category: ICategory2;
  }

  export interface IProductGroup {
    name: string;
    url: string;
  }

  export interface IFactLink {
    url: string;
    title: string;
  }

  export interface ICiLink {
    url: string;
    title: string;
  }

  export interface ISingleInstrument {
    name: string;
    isin: string;
    currency: string;
    price: number;
    isComplex: boolean;
    categories: ICategory[];
    productGroup: IProductGroup;
    factLink: IFactLink;
    ciLink: ICiLink;
    note: string;
  }

  export interface IData {
    singleInstrument: ISingleInstrument;
  }

  export interface IRootObject {
    data: IData;
  }
}
