const FeedReducer = (state = {
	isFetching: false,
	feed: null
}, action) => {
	if (action.type === 'REQUEST_FEED') {
		return Object.assign({}, state, {
			isFetching: true,
		});
	} else if (action.type === 'RECEIVE_FEED') {
		return Object.assign({}, state, {
			isFetching: false,
			feed: action.payload
		});
	} else {
		return state;
	}
};

export default FeedReducer;
