declare namespace DistributionVisualizer {
    // Distribution component
    export interface IDistributionVisualizerData {
        StockPercentage?: number;
        BondPercentage?: number;
        CashPercentage?: number;
        percent?: number;
        label: string;
    }
    export interface IDistributionVisualizerProp {
        data: DistributionVisualizer.IDistributionVisualizerData[];
    }
}