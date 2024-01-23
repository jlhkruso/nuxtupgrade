export const mainNavigation = (isDigitalCustomer: boolean = false) => {
  const internalLinkType = "internal";

  const setMenuOnType = () => {
    if (isDigitalCustomer) {
      return {
        dictionaryKey: "Information.Digital.Navigation.Title",
        title: "Information",
        icon: "icon_paper",
        linkType: internalLinkType,
        linkUrl: "/information",
      };
    } else {
      return {
        dictionaryKey: "Information.Advisory.Navigation.Title",
        title: "Products",
        icon: "icon_paper",
        linkType: internalLinkType,
        linkUrl: "/products",
        id: "products",
      };
    }
  };
  const nav = {
    topMenu: [
      {
        dictionaryKey: "Overview.Navigation.Title",
        title: "Overview",
        icon: "icon_home",
        linkType: internalLinkType,
        linkUrl: "/home",
      },
      {
        dictionaryKey: "Accounts.Navigation.Title",
        title: "Konto & depot",
        icon: "icon_accounts",
        linkType: internalLinkType,
        linkUrl: "/my-bank-box",
      },
      {
        dictionaryKey: "Analysis.Navigation.Title",
        title: "Analyse",
        icon: "icon_analysis",
        linkType: internalLinkType,
        linkUrl: "/my-picture",
      },
      {
        dictionaryKey: "BigPicture.Navigation.Title",
        title: "Big picture",
        icon: "icon_big-picture",
        linkType: internalLinkType,
        linkUrl: "/big-picture",
      },
      {
        dictionaryKey: "University.Navigation.Title",
        title: "Universitet",
        icon: "icon_university",
        linkType: internalLinkType,
        linkUrl: "/university",
      },
      setMenuOnType(),
      {
        dictionaryKey: "Profile.Navigation.Title",
        title: "Profile",
        icon: "icon_profile",
        linkType: internalLinkType,
        linkUrl: "/my-profile",
      },
    ],
    bottomMenu: [
      {
        dictionaryKey: "Messages.Navigation.Title",
        title: "Beskeder",
        icon: "icon_messages",
        linkType: internalLinkType,
        linkUrl: "/messages",
        type: "MessageIndicatorMenuItem",
      },
      {
        dictionaryKey: "WebBank.Navigation.Title",
        title: "Netbank",
        icon: "icon_online-bank",
        linkUrl: "#",
        type: "WebBank",
      },
      {
        dictionaryKey: "Signout.Navigation.Title",
        title: "Log ud",
        icon: "icon_log-out",
        linkUrl: "#",
        type: "SignOut",
      },
    ],
  };
  return nav;
};
