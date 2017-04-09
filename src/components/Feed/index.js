import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  FlatList,
  ListItem,
  RefreshControl
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
      feed: null,
      refreshing: false
    }
    this.props.getFeed();
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.getFeed()
    .then(() => {
      this.setState({refreshing: false});
    });
  }

  renderStory({item}) {
    return <Text>{item.data.title}</Text>;
  }

  displayFeed() {
    if (!this.props.feed) {
      return (
        <Text>Loading feed...</Text>
      );
    }
    return (
      <FlatList
        data={this.props.feed.data.children}
        renderItem={this.renderStory}
      />
    );
  }

  render() {
    return (
      <ScrollView 
        style={styles.container}
        refreshControl={
          <RefreshControl 
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
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

      // <ListView
      //   dataSource={this.props.feed}
      //   renderRow={(story) => <Text>{story}</Text>}
      // />