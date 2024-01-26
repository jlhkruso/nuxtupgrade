declare namespace Warnings {
  export interface IModal {
    text: string;
    title: string;
  }
  export interface IWarning {
    warningType: string;
    message: string;
    modal: IModal;
    properties: Global.IKeyValuePair[];
    blocking: boolean;
    text: string;
  }
}
