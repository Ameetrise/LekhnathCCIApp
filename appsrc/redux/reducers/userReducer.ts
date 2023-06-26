import {
  GET_USER_FETCH_FAILURE,
  LOGOUT,
  SET_CURRENT_COMPANY_INDEX,
} from './../actions/actionTypes';
import {
  UserLoginSuccess,
  UserReducerModal,
} from '../../dataTypes/user/UserLoginSuccess.interface';
import {GET_USER_FETCH_SUCCESS} from '../actions/actionTypes';
import {UserActionType} from '../actions/userActionType';

const userInitial: UserLoginSuccess = {
  user: {
    id: '',
    name: '',
    userName: '',
    companyList: [
      {cLogo: '', cName: '', id: '', imageGallery: [''], owner: ''},
    ],
    phone: '',
    userRole: '',
    userImage: '',
    isActive: false,
  },
  token: '',
};
const initialState: UserReducerModal = {
  error: {code: 0, error: ''},
  user: userInitial,
  currentCompanyIndex: 0,
};

const userReducer = (
  state = initialState,
  action: UserActionType,
): UserReducerModal => {
  // console.log(action);
  switch (action.type) {
    case GET_USER_FETCH_SUCCESS:
      return {...state, error: initialState.error, user: action.payload};
    case GET_USER_FETCH_FAILURE:
      return {...state, error: action.payload};
    case SET_CURRENT_COMPANY_INDEX:
      return {
        ...state,
        currentCompanyIndex: action.payload.currentCompanyIndex,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
