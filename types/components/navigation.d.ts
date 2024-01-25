declare namespace Navigation {
  export interface INavigation {
    topMenu: Array<INavLinkProps>;
    bottomMenu: Array<INavLinkProps>;
  }
  export interface INavLinkProps {
    id: string;
    dictionaryKey: string;
    title: string;
    icon: string;
    linkUrl: string;
    type: string;
    linkType: string;
  }
}
