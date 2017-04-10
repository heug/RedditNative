const PostReducer = (state = {
	isFetching: false,
	id: null
}, action) => {
	if (action.type === 'REQUEST_POST') {
		return Object.assign({}, state, {
			isFetching: true,
		});
	} else if (action.type === 'RECEIVE_POST') {
		return Object.assign({}, state, {
			isFetching: false,
			id: action.payload
		});
	} else {
		return state;
	}
}

export default PostReducer;
