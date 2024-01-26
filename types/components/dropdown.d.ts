declare namespace Dropdown {
  interface IItem {
    text: string | number | object;
    value: string | number | object | boolean;
    disabled: boolean;
  }
}
