declare namespace FlowContentHorizonPicker {
  interface IFlowContentHorizonPickerDictionaryItems {
    CurrentLabel: string;
    RecommendedLabel: string;
    ChooseProfileLabel: string;
    Title: string;
    Text: string;
  }
  export interface FlowContentHorizonPickerData
    extends Flow.IContentComponentBase {
    text: string;
    selectedValue?: number;
    selected?: number;
    current?: number;
    recommended: number;
    currentLabel: string;
    recommendedLabel: string;
    minValue: number;
    maxValue: number;
    minLabel: number;
    maxLabel: number;
    chooseProfileLabel: string;
    dictionaryItems?: IFlowContentHorizonPickerDictionaryItems;
    htmlBlock: FlowContentText.IFlowContentTextData;
  }
}
