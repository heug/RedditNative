import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import Routes from './config/routes';

const store = createStore(Reducers, applyMiddleware(thunk));

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
