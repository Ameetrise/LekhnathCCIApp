import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_USER_FETCH_SUCCESS,
  GET_USER_FETCH,
  GET_USER_FETCH_FAILURE,
} from '../actions/actionTypes';
import {
  UserLoginFail,
  UserLoginSuccess,
} from '../../dataTypes/user/UserLoginSuccess.interface';
import {Alert} from 'react-native';
import {baseUrl} from '../../../env';

const userFetch = async (credentials: any): Promise<any> => {
  try {
    const response = await fetch(`${baseUrl}api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: credentials.userCred.name,
        password: credentials.userCred.password,
      }),
    });
    const user: any = await response.json();
    return user;
  } catch (error) {
    Alert.alert('Error', 'Could not login');
  }
};

function* workGetUserFetch(userCred: any) {
  const user: any = yield call(userFetch, userCred);
  if (user?.user?.id) {
    const userSuccess: UserLoginSuccess = yield call(userFetch, userCred);
    yield put({
      type: GET_USER_FETCH_SUCCESS,
      payload: userSuccess,
    });
  } else {
    const userFailed: UserLoginFail = yield call(userFetch, userCred);
    yield put({
      type: GET_USER_FETCH_FAILURE,
      payload: userFailed,
    });
  }
}

function* root() {
  yield takeEvery(GET_USER_FETCH, workGetUserFetch);
}

export default root;

//jsonplaceholder.typicode.com/users
