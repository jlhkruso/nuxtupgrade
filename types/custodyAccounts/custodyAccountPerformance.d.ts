declare namespace CustodyAccountPerformance {
  export interface ICustodyAccountPerformance {
    return: string;
    percentage: string;
  }

  export interface IData {
    custodyAccountPerformance: ICustodyAccountPerformance;
  }

  export interface IRootObject {
    data: IData;
  }
}
