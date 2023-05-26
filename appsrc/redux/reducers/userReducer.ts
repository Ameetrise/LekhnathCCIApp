import UserLoginSuccess from '../../dataTypes/user/UserLoginSuccess.interface';
import {GET_USER_FETCH_SUCCESS} from '../actions/actionTypes';

const initialState: UserLoginSuccess = {
  id: '',
  name: '',
  userName: '',
  companies: [{id: ''}],
  phone: 0,
  email: '',
  regNo: 0,
  userRole: '',
};

const userReducer = (
  state = initialState,
  action: {type: any; user: UserLoginSuccess},
): UserLoginSuccess => {
  switch (action.type) {
    case GET_USER_FETCH_SUCCESS:
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
