declare namespace FindAndReplaceInjection {
  export interface IMethods {
    genericValues: (string: string, genericValues: []) => string;
    genericNumberValues: (string: string, genericValues: []) => string;
    singleValue: (string: string, val: number | string) => string | null;
  }
}
