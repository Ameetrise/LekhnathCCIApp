import {combineReducers} from 'redux';
import userReducer from './userReducer';
import feedsReducer from '../../screens/feeds/redux/reducer/feedsReducer';
import appStateReducer from './appStateReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  feedsReducer: feedsReducer,
  appStateReducer: appStateReducer,
});
export default rootReducer;
