declare namespace CultureState {
  interface ICultureSettings {
    lang: string;
    locale: string;
  }
  export interface ICulture {
    culture: ICultureSettings[];
  }
}
