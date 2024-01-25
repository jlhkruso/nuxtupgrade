declare namespace Global {
  export interface IHeaders {
    "correlation-context": string;
  }
  export interface IKeyValuePair {
    key: string;
    value: string | number;
  }
  export interface IKeyValuePairWithFormat extends IKeyValuePair {
    format: "pct" | "value" | null;
  }

  export interface ILinks {
    key: string;
    target: string;
    id: string;
    isExternal?: boolean;
  }
}
