import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Feed from "../components/Feed";
import Post from "../components/Post";

const Routes = (props) => (
  <Router {...props}>
    <Scene key="root">
      <Scene key="feed" component={Feed} title="News Feed" initial={true}/>
      <Scene key="post" component={Post} title="Details"/>
    </Scene>
  </Router>
);

export default Routes;
