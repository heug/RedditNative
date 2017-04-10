import React, { Component } from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';
import styles from './styles';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  highlightText(text) {
    return <Text style={styles.highlight}>{text}</Text>;
  }

  render() {
    return (
      <ScrollView 
        style={styles.container}
      >
        <Text>{this.highlightText(this.props.item.data.author)} posted a link to {this.highlightText(this.props.item.data.subreddit_name_prefixed)} from {this.highlightText(this.props.item.data.domain)}. It has a score of {this.highlightText(this.props.item.data.score)} and {this.highlightText(this.props.item.data.num_comments)} comments!{"\n\nHere's the title(gore):\n"}{this.props.item.data.title + "\n\nURL:\n"}{this.props.item.data.url}</Text>
      </ScrollView>
    );
  }
}

export default Post;
