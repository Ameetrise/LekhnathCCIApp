import {DrawerScreenList} from '../../dataTypes/AppStateModal.interface';
import {
  GET_USER_FETCH,
  SET_CURRENT_COMPANY_INDEX,
  SET_CURRENT_DRAWER_SCREEN,
  SET_DARK_MODE,
} from './actionTypes';

export const getUsersFetch = () => {
  return {
    type: GET_USER_FETCH,
  };
};

export const setDarkMode = (isDarkMode: boolean) => {
  return {
    type: SET_DARK_MODE,
    payload: {
      isDarkMode: isDarkMode,
    },
  };
};

export const setCurrentDrawerState = (screen: DrawerScreenList) => {
  return {
    type: SET_CURRENT_DRAWER_SCREEN,
    payload: {
      screen: screen,
    },
  };
};

export const setCurrentCompanyIndex = (index: number) => {
  console.log('action ', index);
  return {
    type: SET_CURRENT_COMPANY_INDEX,
    payload: {currentCompanyIndex: index},
  };
};
