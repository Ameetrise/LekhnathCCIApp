import {NewItemList} from './../../dataType/NewsItemDataModal';
import {call, put, takeLatest} from 'redux-saga/effects';
import NewsItemDataModal from '../../dataType/NewsItemDataModal';
import {
  GET_FEEDS_FETCH,
  GET_FEEDS_FETCH_SUCCESS,
} from '../action/feedsActionType';

const feedsFetch = async (): Promise<any> => {
  try {
    const response = await fetch('https://lekhnathcci.org.np/api/articles');
    const feeds: NewItemList = await response.json();
    return feeds;
  } catch (error) {
    console.error(error);
  }
};

function* workGetFeedsFetch() {
  const feeds: NewItemList = yield call(feedsFetch);
  yield put({type: GET_FEEDS_FETCH_SUCCESS, feeds});
}

function* feedsSaga() {
  yield takeLatest(GET_FEEDS_FETCH, workGetFeedsFetch);
}

export default feedsSaga;
