import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_USER_FETCH_SUCCESS, GET_USER_FETCH} from '../actions/actionTypes';
import {UserLoginSuccess} from '../../dataTypes/user/UserLoginSuccess.interface';

const userFetch = async (): Promise<any> => {
  try {
    const response = await fetch(
      'https://run.mocky.io/v3/e5ccdf7e-f6a9-45e0-9bc4-f6f56169671e',
    );
    const user: UserLoginSuccess = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};

function* workGetUserFetch() {
  const user: UserLoginSuccess = yield call(userFetch);
  yield put({
    type: GET_USER_FETCH_SUCCESS,
    payload: {
      user: user,
    },
  });
}

function* root() {
  yield takeEvery(GET_USER_FETCH, workGetUserFetch);
}

export default root;

//jsonplaceholder.typicode.com/users
