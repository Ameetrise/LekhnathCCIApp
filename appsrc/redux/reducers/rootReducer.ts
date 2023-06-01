import {combineReducers} from 'redux';
import userReducer from './userReducer';
import feedsReducer from '../../screens/feeds/redux/reducer/feedsReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  feedsReducer: feedsReducer,
});
export default rootReducer;
