declare namespace FormatterInjection {
  export interface IMethods {
    round: (number: number, decimal: number, comma?: boolean) => number;
    roundToLocaleString: (number: number, decimal: number) => number;
    isAmountNull: (amount: number, decimal: number) => boolean;
    toLocaleStr: (number: number, locale?: string) => string;
    removeNegative: (value: number) => number;
    dateTimeHandler: (
      date: string,
      monthLenght?: "long" | "numeric" | "2-digit" | "short" | "narrow",
      showTime?: boolean
    ) => string;
    bytesToMegaBytes: (bytes: number) => number;
    mapArrayDateStrToDateTime: (
      arr: [] | CMS.IArticle[]
    ) => Object[] | CMS.IArticle[] | [];
    toLocaleStringAndReplace: (
      number: number,
      replaceStr: string,
      decimal?: number
    ) => string;
    roundAndReplace: (
      number: number,
      replaceStr: string,
      decimal?: number
    ) => string;
  }
}
