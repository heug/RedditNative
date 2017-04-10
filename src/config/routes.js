import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Feed from "../components/Feed";
import Post from "../components/Post";

const Routes = (props) => (
  <Router {...props}>
    <Scene key="root">
      <Scene key="feed" component={Feed} title="Reddit Native Feed" initial={true}/>
      <Scene key="post" component={Post} title="Reddit Native Post"/>
    </Scene>
  </Router>
);

export default Routes;
