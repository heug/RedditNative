import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducers from './src/reducers';
import Feed from './src/components/Feed';

const store = createStore(Reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Feed/>
    );
  }
}

export default class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RedditNative', () => Container);
