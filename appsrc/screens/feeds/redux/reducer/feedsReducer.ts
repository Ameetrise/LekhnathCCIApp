import NewsItemDataModal from '../../dataType/NewsItemDataModal';
import {GET_FEEDS_FETCH_SUCCESS} from '../action/feedsActionType';

const initialState: NewsItemDataModal[] = [];

const feedsReducer = (
  state = initialState,
  action: {type: any; feeds: NewsItemDataModal[]},
): NewsItemDataModal[] => {
  switch (action.type) {
    case GET_FEEDS_FETCH_SUCCESS:
      return action.feeds;

    default:
      return state;
  }
};

export default feedsReducer;
