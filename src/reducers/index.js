import { combineReducers } from 'redux';
import FeedReducer from './feed';

const allReducers = combineReducers({
	feed: FeedReducer
});

export default allReducers;
