declare namespace ConversationMessages {
  interface IFileReference {
    fileName: string;
    url: string;
  }
  interface IMessage {
    messageId: string;
    date: string;
    messageText: string;
    fileReferences: IFileReference[];
  }
  interface IConversationMessages {
    nodes: INode[];
  }
  export interface INode {
    conversationId: string;
    messages: IMessage[];
    subject: string;
  }
  export interface IPageInfo {
    endCursor: string;
    hasNextPage: boolean;
  }
  export interface IData {
    conversations: IConversationMessages;
  }
}
