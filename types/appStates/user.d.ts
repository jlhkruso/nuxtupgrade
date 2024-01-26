declare namespace User {
  export interface IUserData {
    data: User.IUserStates;
  }
  export interface IUserStates {
    isDigitalCustomer: boolean;
    roles: string[];
    userType: string | null;
    isAdvisor: boolean;
    isSimulation: boolean;
    name: string | null;
    unreadMessages: number;
  }
}
