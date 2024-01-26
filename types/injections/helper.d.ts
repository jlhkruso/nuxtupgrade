declare namespace HelperInjection {
  export interface IMethods {
    replaceEnvUrl: (envApiUrl: string) => string;
    isNegative: (value: number) => number;
    urlToTitle: (url: string) => string;
    emptyString: (str: string) => string | null;
    maxChar: (str: string, max: number) => string | null;
    firstAndLastDayOfYear: () => Helpers.IFirstAndLastDayOfYear;
  }
}
