declare namespace Conversations {
  interface IConversations {
    pageInfo: IPageInfo;
    nodes: INode[];
  }
  export interface INode {
    conversationId: string;
    subject: string;
    lastMessageDate: string;
    allMessagesRead: boolean;
  }
  export interface IPageInfo {
    endCursor: string;
    hasNextPage: boolean;
  }
  export interface IData {
    conversations: IConversations;
  }
}
