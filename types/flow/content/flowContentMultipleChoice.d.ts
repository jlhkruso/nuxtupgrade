declare namespace FlowContentMultipleChoice {
  export interface IAnswer {
    answer: number;
    isValid: boolean;
    id: number;
    answers?: number[];
  }
  export interface IFlowContentMultipleChoiceAnswerQuestion {
    answer: number;
    answers: number[] | number;
    question: number;
  }
  export interface IFlowContentMultipleChoiceAnswers {
    values: IFlowContentMultipleChoiceAnswerQuestion[];
  }
  export interface IFlowContentMultipleChoiceSectionOption {
    label: string;
    value: number;
    isChecked: string;
    optionType: string;
    options: IFlowContentMultipleChoiceSectionOption[];
  }
  export interface IFlowContentMultipleChoiceSection {
    dataType: string;
    id: number;
    label: string;
    options: IFlowContentMultipleChoiceSectionOption[];
  }

  export interface FlowContentMultipleChoiceData
    extends Flow.IContentComponentBase {
    sections: IFlowContentMultipleChoiceSection[];
    dictionaryItems: { NoAnswer: string };
    bottomText: FlowContentText.IFlowContentTextData;
  }
}
