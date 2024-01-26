declare namespace SettingsState{
  export interface ILanguage {
    nativeName: string;
    englishName: string;
    culture: string;
    pathPrefix: string;
    isDefault: boolean;
  }
  
  export interface ICulturePrefixes {
    api: string;
    pages: string;
  }
  
  export interface ICulture {
    culture: SettingsState.ICulturePrefixes;
    cultures: SettingsState.ILanguage[];
  }
}

