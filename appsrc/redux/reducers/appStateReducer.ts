import AppStateModal from '../../dataTypes/AppStateModal.interface';
import {SET_CURRENT_DRAWER_SCREEN, SET_DARK_MODE} from '../actions/actionTypes';
import {AppStateActionTypes} from '../actions/actionsInterface';

const initialState: AppStateModal = {
  isDarkMode: false,
  currentDrawerScreen: 'Home',
};

const appStateReducer = (
  state = initialState,
  action: AppStateActionTypes,
): AppStateModal => {
  switch (action.type) {
    // console.log(action.payload)
    case SET_DARK_MODE:
      return {...state, isDarkMode: !action.payload.isDarkMode};

    case SET_CURRENT_DRAWER_SCREEN:
      return {
        ...state,
        currentDrawerScreen: action.payload.screen,
      };
    default:
      return state;
  }
};

export default appStateReducer;
