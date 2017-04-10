import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import Routes from './config/routes';

const store = createStore(allReducers, compose(applyMiddleware(thunk), autoRehydrate()));
persistStore(store, {storage: AsyncStorage});

export default class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RedditNative', () => Container);
