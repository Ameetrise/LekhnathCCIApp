import {
  NewItemList,
  NewsItemDataModal,
} from './../../dataType/NewsItemDataModal';
import {GET_FEEDS_FETCH_SUCCESS} from '../action/feedsActionType';

const feedItem: NewsItemDataModal = {
  title: '',
  description: '',
  createdAt: '',
  newsImage: '',
  author: {
    name: '',
    userRole: '',
    id: '',
  },
  id: '',
};
const initialState: NewItemList = {
  feeds: [feedItem],
};

const feedsReducer = (
  state = initialState,
  action: {type: any; feeds: NewItemList},
): NewItemList => {
  switch (action.type) {
    case GET_FEEDS_FETCH_SUCCESS:
      return action.feeds;
    default:
      return state;
  }
};

export default feedsReducer;
