export default defineNuxtPlugin((nuxtApp) => {
  // url helper
  const replaceEnvUrl = (envApiUrl: string) => {
    return envApiUrl.includes("/web")
      ? envApiUrl.replace("/web", "")
      : envApiUrl;
  };
  // check if value is negative
  const isNegative = (value: number) => {
    return Math.sign(value) < 0;
  };

  // convert url to title
  const urlToTitle = (url: string) => {
    if (url) {
      const title = url.replace(/-/g, " ").toLowerCase();
      return title;
    }
  };

  // check for empty string
  const emptyString = (str: string): string | null => {
    const emptyString = "#empty#";
    return str && str.includes(emptyString) ? null : str;
  };

  // max char handler
  const maxChar = (str: string, max: number): string | null => {
    if (str) {
      // if string is larger than max amount, add "..." and slice str
      return str.length > max - 3 ? `${str.slice(0, max)}...` : str;
    } else {
      return null;
    }
  };

  // return first and last day of the year
  const firstAndLastDayOfYear = (
    currentDate: string
  ): Helpers.IFirstAndLastDayOfYear => {
    const setCurrentDate = currentDate ? currentDate : new Date();
    const currentYear = new Date(setCurrentDate).getFullYear();
    const firstDay = new Date(currentYear, 0, 1);
    const lastDay = new Date(currentYear, 11, 31);
    const date = (date: Date) => new Date(date).toLocaleDateString("en-CA");
    return {
      firstDay: date(firstDay),
      lastDay: date(lastDay),
    };
  };

  const stocksKey = "asset_stocks";
  const bondsKey = "asset_bonds";
  const cashKey = "asset_cash";

  // new total calculator
  const calculateNewAssetsTotal = (arr: any[]) => {
    let assetStocks: number;
    let assetBonds: number;

    // asign asset values from array to variables
    for (const value of arr) {
      value.key === stocksKey && (assetStocks = value.weight);
      value.key === bondsKey && (assetBonds = value.weight);
    }

    const calculatedNewTotal = assetStocks! + assetBonds!;
    return calculatedNewTotal;
  };

  // method to calculate new asset stock value (used if cash balance is negative)
  const calculateAssetsStock = (value: number, newTotal: number): number => {
    // return calculated asset stock
    return (value / newTotal) * 100;
  };

  // method to check if cash balance is negative
  const hasNegativeCashBalance = (arr: []): boolean => {
    const findNegativeCashBalance = arr.find(
      (e: CustodyAccount.IXray) => e.key === cashKey && e.weight < 0
    );
    return findNegativeCashBalance !== undefined;
  };

  // min max handler (used in highcharts)
  const minMaxHandler = (
    arr: number[],
    percentage: number = 0.02
  ): Highchart.IMinMax => {
    // remove null values
    const filterArr = arr.filter((e) => e !== null);

    // get minimum value from array
    const min = Math.min(...filterArr);

    // get maximum value from array
    const max = Math.max(...filterArr);

    // calculate the distance
    const distance = max - min;

    // calculate the padding
    const padding = percentage * distance;
    return {
      min: min - padding,
      max: max + padding,
    };
  };

  nuxtApp.provide("helper", {
    replaceEnvUrl,
    isNegative,
    urlToTitle,
    emptyString,
    maxChar,
    firstAndLastDayOfYear,
    calculateNewAssetsTotal,
    calculateAssetsStock,
    hasNegativeCashBalance,
    minMaxHandler,
  } as any) as any;
});
