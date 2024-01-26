declare namespace Global {
  export interface IHeaders {
    "correlation-context": string;
  }
  export interface IKeyValuePair {
    key: string;
    value: string | number;
  }
}
