import {all} from 'redux-saga/effects';
import mySaga from '.';
import feedsSaga from '../../screens/feeds/redux/saga/feedsSage';

export default function* root() {
  yield all([mySaga(), feedsSaga()]);
}
