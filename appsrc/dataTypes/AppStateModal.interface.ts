export type DrawerScreenList = 'ImportantNumbers' | 'Home';
interface AppStateModal {
  isDarkMode: boolean;
  currentDrawerScreen: DrawerScreenList;
}
export default AppStateModal;
