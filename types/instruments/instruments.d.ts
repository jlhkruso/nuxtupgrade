declare namespace Instruments {
  export interface IPageInfo {
    endCursor: string;
    hasNextPage: boolean;
  }

  export interface INestedCategory {
    mainId: number;
    subId: number;
    sortOrder: number;
    name: string;
    parentName: string;
  }

  export interface ICategory {
    category: INestedCategory;
  }

  export interface INode {
    name: string;
    miid: string;
    categories: ICategory[];
  }

  export interface IInstruments {
    pageInfo: IPageInfo;
    nodes: Node[];
  }

  export interface IData {
    instruments: IInstruments;
  }

  export interface IRootObject {
    data: IData;
  }
  export interface IVariables {
    filterCategory: string;
    presentationCategory: string;
    first: number;
    after?: string;
  }
  export interface ISortedList {
    sortOrder: number;
    name: string;
    list: INode[];
  }
}
