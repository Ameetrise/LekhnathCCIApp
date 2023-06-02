import {UserLoginSuccess} from '../../dataTypes/user/UserLoginSuccess.interface';
import {GET_USER_FETCH_SUCCESS, SET_CURRENT_COMPANY_INDEX} from './actionTypes';

interface GetUserFetchSuccess {
  type: typeof GET_USER_FETCH_SUCCESS;
  payload: {
    user: UserLoginSuccess;
  };
}

interface SetCurrentCompanyIndex {
  type: typeof SET_CURRENT_COMPANY_INDEX;
  payload: {currentCompanyIndex: number};
}

export type UserActionType = GetUserFetchSuccess | SetCurrentCompanyIndex;
