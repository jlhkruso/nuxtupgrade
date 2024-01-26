declare namespace Advisor {
  export interface IAdvisor {
    name: string;
    phone: string;
    imageUrl: string;
  }

  export interface IClient {
    advisor: IAdvisor;
  }

  export interface IData {
    client: IClient;
  }
}
