declare namespace CustodyAccountPerformanceCalculations {
  export interface IDateContext {
    today: string;
    firstDayOfWeek: number;
    dayNames: string[];
    monthNamesAbr: string[];
  }
  export interface IPerformanceCalculation {
    date: string;
  }

  export interface ICustodyAccount {
    performanceCalculations: IPerformanceCalculation[];
  }

  export interface IClient {
    dateContext: IDateContext;
    custodyAccounts: ICustodyAccount[];
  }
  export interface IPerformanceCalculation {
    date: string;
    afkast: number;
  }
  export interface IData {
    client: IClient;
    performanceCalculations: IPerformanceCalculation[];
    error: Object;
  }
}
