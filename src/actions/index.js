const url = 'https://www.reddit.com/.json';

export const REQUEST_FEED = 'REQUEST_FEED';
export const RECEIVE_FEED = 'RECEIVE_FEED';
export const GET_FEED = 'GET_FEED';

export const requestFeed = () => {
	return {
		type: 'REQUEST_FEED'
	};
};

export const receiveFeed = (data) => {
	return {
		type: 'RECEIVE_FEED',
		payload: data
	};
};

// function fetchFeed() {
// 	return fetch(url);
// }

export const getFeed = () => {
	return (dispatch) => {
		dispatch(requestFeed());
		return fetch(url)
		.then((res) => {
			if (res.status >= 400) {
				throw new Error('Bad request');
			}
			return res.json();
		})
		.then((data) => {
			dispatch(receiveFeed(data));
		})
		.catch((err) => {
			throw new Error('Error fetching feed:', err);
		});
	};
};
