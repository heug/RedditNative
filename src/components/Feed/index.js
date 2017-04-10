import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  FlatList,
  ListItem,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getFeed } from '../../actions';

function mapStateToProps(state) { 
  return {feed: state.feed.data} 
}
function mapDispatchToProps(dispatch) { return bindActionCreators({getFeed: getFeed}, dispatch); }

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null,
      post: null,
      refreshing: false
    }
    this.props.getFeed();
  }

  _keyExtractor(item, idx) {
    return item.data.id;
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.getFeed()
    .then(() => {
      this.setState({refreshing: false});
    });
  }

  renderImage(img) {
    return (
      <Image source={{uri: img[0].url}}
              style={{width: 50, height: 50}} />
    );
  }

  renderStory({item}) {
    const goToStory = () => Actions.post({item});
    let image = null;
    // if (item.data.preview.images.length) {
    //   image = <Image source={{uri: item.data.preview.images[0].resolutions[0].url}}
    //             style={{width: 50, height: 50}} />
    // }
    return (
      <TouchableHighlight onPress={goToStory}>
        <View>

          <Text
            style={styles.searchRow}
          >{item.data.title}</Text>
          <Text>{item.data.author}</Text>
          <Text>{item.data.subreddit}</Text>
          <Text>{item.data.score}</Text>
          <Text>{item.data.created}</Text>
          <Text>{item.data.domain}</Text>
        </View>
      </TouchableHighlight>
    );
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
        keyExtractor={this._keyExtractor}
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
          Reddit Native
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
  searchRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
