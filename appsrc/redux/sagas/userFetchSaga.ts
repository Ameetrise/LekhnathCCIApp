import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_USER_FETCH_SUCCESS, GET_USER_FETCH} from '../actions/actionTypes';
import {UserLoginSuccess} from '../../dataTypes/user/UserLoginSuccess.interface';

const userFetch = async (credentials: any): Promise<any> => {
  try {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: credentials.userCred.name,
        password: credentials.userCred.password,
      }),
    });
    const user: UserLoginSuccess = await response.json();
    console.log(user.user.id);
    return user;
  } catch (error) {
    console.error('thiserr', error);
  }
};

function* workGetUserFetch(userCred: any) {
  const user: UserLoginSuccess = yield call(userFetch, userCred);
  yield put({
    type: GET_USER_FETCH_SUCCESS,
    payload: user,
  });
}

function* root() {
  yield takeEvery(GET_USER_FETCH, workGetUserFetch);
}

export default root;

//jsonplaceholder.typicode.com/users
