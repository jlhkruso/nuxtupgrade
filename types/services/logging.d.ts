declare namespace Logging {
  export interface ILog {
    errorMessage: string;
    errorCode: number;
    url?: string;
    correlationContext?: string | null;
    request?: string;
  }
}
