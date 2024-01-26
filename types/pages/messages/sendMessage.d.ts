declare namespace SendMessage {
  export interface IAttachment {
    name: string;
    lastModified: number;
    lastModifiedDate: Object;
    size: number;
    type: string;
    webkitRelativePath: string;
    errorToLarge?: boolean;
    errorToMany?: boolean;
    fileError?: boolean;
  }
  export interface IMessage {
    subject: string;
    text: string;
    conversationId: string;
  }
  export interface IPrefilledData {
    conversationId: string;
    subject: string;
  }
}
