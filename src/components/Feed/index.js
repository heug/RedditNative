import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getFeed } from '../../actions';
import styles from './styles';

function mapStateToProps(state) { 
  return {feed: state.feed.data} 
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getFeed: getFeed}, dispatch);
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' at ' + hour + ':' + min + ':' + sec ;
  return time;
}

class SeparatorComponent extends Component {
  render() {
    return <View style={styles.separator} />;
  }
}

class FooterComponent extends Component {
  render() {
    return (
    <View>
    <SeparatorComponent/>
    <View style={styles.footer} />
    </View>
    );
  }
}

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

  renderStory({item}) {
    const goToStory = () => Actions.post({item});
    let image = <Image source={require('../../assets/snoo.png')} style={styles.image}/>;
    if (item.data.preview) {
      image = <Image source={{uri: item.data.preview.images[0].source.url}}
                style={styles.image} />;
    }
    return (
      <TouchableHighlight onPress={goToStory}>
        <View style={styles.item}>
          <View style={styles.headline}>
            <View style={styles.imageBox}>{image}</View>
            <View><Text style={styles.title}>{item.data.title} <Text style={styles.byline}>({item.data.domain})</Text></Text></View>
          </View>
          <View style={styles.subline}>
            <View><Text style={styles.score}>{item.data.score}</Text></View>
            <View style={styles.padLeft}>
              <Text style={styles.byline}>submitted {timeConverter(item.data.created)}{"\n"}
                by {item.data.author} to r/{item.data.subreddit}</Text>
            </View>
          </View>
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
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={FooterComponent}
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
        {this.displayFeed()}
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
