import supportedCultures from "~/utils/supportedCultures";
export const useCultureStore = defineStore("cultureStore", () => {
  //STATE
  const culture = ref<CultureState.ICultureSettings>();

  // set inital culture state
  const setInitState = () => {
    culture.value = supportedCultures()[0];
  };

  return {
    culture,
    setInitState,
  };
});
