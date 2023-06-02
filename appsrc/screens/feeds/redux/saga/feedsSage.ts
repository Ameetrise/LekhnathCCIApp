import {call, put, takeLatest} from 'redux-saga/effects';
import NewsItemDataModal from '../../dataType/NewsItemDataModal';
import {
  GET_FEEDS_FETCH,
  GET_FEEDS_FETCH_SUCCESS,
} from '../action/feedsActionType';

const feedsFetch = async (): Promise<any> => {
  console.log('feedsfetch');
  try {
    const response = await fetch(
      'https://run.mocky.io/v3/24c4c935-8282-4841-8fb6-8ff4bae15383',
    );
    const feeds: NewsItemDataModal[] = await response.json();
    return feeds;
  } catch (error) {
    console.error(error);
  }
};

function* workGetFeedsFetch() {
  const feeds = yield call(feedsFetch);
  yield put({type: GET_FEEDS_FETCH_SUCCESS, feeds});
}

function* feedsSaga() {
  yield takeLatest(GET_FEEDS_FETCH, workGetFeedsFetch);
}

export default feedsSaga;
