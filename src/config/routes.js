import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Feed from "../components/Feed";

const Routes = (props) => (
  <Router {...props}>
    <Scene key="root">
      <Scene key="feed" component={Feed} title="Reddit Native Feed"/>
    </Scene>
  </Router>
);

export default Routes;
