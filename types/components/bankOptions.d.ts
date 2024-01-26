declare namespace BankOptionsQuery {
  interface IQueryLink {
    title: string;
    type: string;
    url: string;
  }
  interface IOptions {
    accessible: boolean;
    links: Array<IQueryLink>;
  }
  export interface IQuery {
    bankOptions: IOptions;
  }
}
