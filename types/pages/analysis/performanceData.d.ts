declare namespace AnalysisformanceData {
  export interface ICustodyAccountPerformance {
    return: number;
    percentage: number;
  }

  export interface IPerformanceCalculation {
    date: string;
    formue?: number;
    afkast: number;
    afkastPct: number;
  }

  export interface IData {
    custodyAccountPerformance: ICustodyAccountPerformance;
    performanceCalculations: IPerformanceCalculation[];
    error?: Object;
    client: IClient;
  }
  export interface IDateObj {
    startDate: string;
    endDate: string;
  }
  export interface IRootObject {
    data: IData;
  }
  export interface IDateContext {
    monthNamesAbr: string[];
    currentDate?: string;
  }
  export interface ICustodyAccounts {
    firstTransaction: string;
  }
  export interface IClient {
    dateContext: IDateContext;
    custodyAccounts: ICustodyAccounts[];
  }
}
