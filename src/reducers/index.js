import { combineReducers } from 'redux';
import FeedReducer from './feed';
import PostReducer from './post';

const allReducers = combineReducers({
	feed: FeedReducer,
	post: PostReducer
});

export default allReducers;
