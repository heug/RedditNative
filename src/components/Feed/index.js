import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
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
        <Text>Loading feed...</Text>
      );
    }
    return (
      this.props.feed.data.children.map((post) => {
        return (
          <Text>{ post.data.title + "\n" }</Text>
        );
      })
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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
        {this.displayFeed()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20
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
