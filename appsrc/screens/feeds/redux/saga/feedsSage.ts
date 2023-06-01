import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import NewsItemDataModal from '../../dataType/NewsItemDataModal';
import {
  GET_FEEDS_FETCH,
  GET_FEEDS_FETCH_SUCCESS,
} from '../action/feedsActionType';

const feedsFetch = async (): Promise<any> => {
  console.log('feedsfetch');
  try {
    const response = await fetch(
      'https://run.mocky.io/v3/f2ac2434-5b92-4059-b8b2-ed41ae2e0423',
    );
    const feeds: NewsItemDataModal[] = await response.json();
    console.log('from feeds: ', feeds);
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
