declare namespace ShareDistribution {
  // Distribution component
  export interface ShareDistributionData {
    id: number;
    key: string;
    currentStockPercentage: number;
    currentStockCurrency: number;
    mbStockPercentage: number;
    mbStockCurrency: number;
    hasInstrumentsCurrent: boolean;
    currentBondPercentage: number;
    currentBondCurrency: number;
    mbBondPercentage: number;
    mbBondCurrency: number;
    sumPercentage: number;
    sumCurrency: number;
  }
}
