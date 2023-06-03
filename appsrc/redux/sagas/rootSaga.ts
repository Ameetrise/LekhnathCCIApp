import {all} from 'redux-saga/effects';
import mySaga from './userFetchSaga';
import feedsSaga from '../../screens/feeds/redux/saga/feedsSaga';

export default function* root() {
  yield all([mySaga(), feedsSaga()]);
}
