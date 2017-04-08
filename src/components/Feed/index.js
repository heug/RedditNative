import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFeed } from '../../actions';

function mapStateToProps(state) { 
  return {feed: state.feed} 
}
function mapDispatchToProps(dispatch) { return bindActionCreators({getFeed: getFeed}, dispatch); }

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null
    }
    this.props.getFeed();
  }

  displayFeed() {
    if (!this.props.feed) {
      return (
        <Text>No feed!</Text>
      );
    }
    return (
      <Text>{this.props.feed.kind}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.displayFeed()}
        <Text style={styles.welcome}>
          Hello world!
        </Text>
        <Text style={styles.instructions}>
          Oh yeah
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);