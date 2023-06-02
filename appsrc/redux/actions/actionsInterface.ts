import {DrawerScreenList} from '../../dataTypes/AppStateModal.interface';
import {SET_CURRENT_DRAWER_SCREEN, SET_DARK_MODE} from './actionTypes';

interface SetDarkMode {
  type: typeof SET_DARK_MODE;
  payload: {
    isDarkMode: boolean;
  };
}

interface SetCurrentDrawerState {
  type: typeof SET_CURRENT_DRAWER_SCREEN;
  payload: {
    screen: DrawerScreenList;
  };
}

export type AppStateActionTypes = SetDarkMode | SetCurrentDrawerState;
