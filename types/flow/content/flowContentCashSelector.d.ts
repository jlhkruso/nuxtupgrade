declare namespace FlowContentCashSelector {
  export interface IFlowContentCashSelectorData
    extends Flow.IContentComponentBase {
    hintText: string;
    validationErrorText: string;
    inputLabel: string;
    inputPlaceholder: string;
    note: string;
    amount: number;
    currentAmount: number;
    maxCashAmount: number;
    remainingAmount: number;
  }
}
