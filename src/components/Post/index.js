import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView 
        style={styles.container}
      >
        <Text style={styles.welcome}>
          Reddit Native
        </Text>
        <Text style={styles.welcome}>
          {this.props.item.data.domain}
        </Text>
        <Text style={styles.welcome}>
          {this.props.item.data.permalink}
        </Text>
        <Text style={styles.welcome}>
          {this.props.item.data.title}
        </Text>
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

export default Post;
