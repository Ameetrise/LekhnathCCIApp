import {CompanyItem} from '../../dataTypes/CompanyList.interface';
import {
  UserLoginFail,
  UserLoginSuccess,
} from '../../dataTypes/user/UserLoginSuccess.interface';
import {
  GET_USER_FETCH_FAILURE,
  GET_USER_FETCH_SUCCESS,
  LOGOUT,
  SET_CURRENT_COMPANY_INDEX,
  UPDATE_COMPANY,
} from './actionTypes';

interface GetUserFetchSuccess {
  type: typeof GET_USER_FETCH_SUCCESS;
  payload: UserLoginSuccess;
}
interface GetUserFetchFailure {
  type: typeof GET_USER_FETCH_FAILURE;
  payload: UserLoginFail;
}

interface LogOutUser {
  type: typeof LOGOUT;
}

interface SetCurrentCompanyIndex {
  type: typeof SET_CURRENT_COMPANY_INDEX;
  payload: {currentCompanyIndex: number};
}
interface UpdateCompany {
  type: typeof UPDATE_COMPANY;
  payload: CompanyItem[];
}

export type UserActionType =
  | GetUserFetchSuccess
  | GetUserFetchFailure
  | SetCurrentCompanyIndex
  | LogOutUser
  | UpdateCompany;
