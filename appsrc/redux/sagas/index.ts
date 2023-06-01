import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_USER_FETCH_SUCCESS, GET_USER_FETCH} from '../actions/actionTypes';
import UserLoginSuccess from '../../dataTypes/user/UserLoginSuccess.interface';

const userFetch = async (): Promise<any> => {
  try {
    const response = await fetch(
      'https://run.mocky.io/v3/4ad17222-162e-4024-b122-13800e97726c',
    );
    const user: UserLoginSuccess = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};

function* workGetUserFetch() {
  const user = yield call(userFetch);
  console.log('workget ', user);
  yield put({type: GET_USER_FETCH_SUCCESS, user});
}

function* root() {
  yield takeEvery(GET_USER_FETCH, workGetUserFetch);
}

export default root;

//jsonplaceholder.typicode.com/users
