import {UserLoginSuccess} from '../../dataTypes/user/UserLoginSuccess.interface';
import {
  GET_USER_FETCH_SUCCESS,
  LOGOUT,
  SET_CURRENT_COMPANY_INDEX,
} from './actionTypes';

interface GetUserFetchSuccess {
  type: typeof GET_USER_FETCH_SUCCESS;
  payload: UserLoginSuccess;
}

interface LogOutUser {
  type: typeof LOGOUT;
}

interface SetCurrentCompanyIndex {
  type: typeof SET_CURRENT_COMPANY_INDEX;
  payload: {currentCompanyIndex: number};
}

export type UserActionType =
  | GetUserFetchSuccess
  | SetCurrentCompanyIndex
  | LogOutUser;
