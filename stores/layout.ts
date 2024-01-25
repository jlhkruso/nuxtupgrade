export const useLayouteStore = defineStore("layoutStore", () => {
  //STATE
  const loadingOverlayIsActive = ref<boolean>();
  const navIsOpen = ref<boolean>();
  const hasActiveInfoBox = ref<boolean>();

  // set inital culture state
  const handleOverlayLoading = (
    state: LayoutState.IStates,
    loading: boolean
  ) => {
    state.loadingOverlayIsActive = loading;
  };

  // toggle state (open/closed)
  const toggleNav = () => {
    navIsOpen.value = !navIsOpen.value;
  };

  // navigation toggle state (open/closed)
  const closeNav = () => {
    navIsOpen.value = false;
  };

  return {
    loadingOverlayIsActive,
    navIsOpen,
    hasActiveInfoBox,
    handleOverlayLoading,
    toggleNav,
    closeNav,
  };
});
