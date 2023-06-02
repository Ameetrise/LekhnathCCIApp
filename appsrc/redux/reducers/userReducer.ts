import {SET_CURRENT_COMPANY_INDEX} from './../actions/actionTypes';
import {
  UserLoginSuccess,
  UserReducerModal,
} from '../../dataTypes/user/UserLoginSuccess.interface';
import {GET_USER_FETCH_SUCCESS} from '../actions/actionTypes';
import {UserActionType} from '../actions/userActionType';

const userInitial: UserLoginSuccess = {
  id: '',
  name: '',
  userName: '',
  companies: [{id: '', clogo: '', cname: ''}],
  phone: 0,
  email: '',
  regNo: 0,
  userRole: '',
  userImage: '',
  currentCompanyIndex: 0,
};
const initialState: UserReducerModal = {
  user: userInitial,
  currentCompanyIndex: 0,
};

const userReducer = (
  state = initialState,
  action: UserActionType,
): UserReducerModal => {
  console.log('reducerU: ', action.payload);
  switch (action.type) {
    case GET_USER_FETCH_SUCCESS:
      return {...state, user: action.payload.user};
    case SET_CURRENT_COMPANY_INDEX:
      return {
        ...state,
        currentCompanyIndex: action.payload.currentCompanyIndex,
      };
    default:
      return state;
  }
};

export default userReducer;
