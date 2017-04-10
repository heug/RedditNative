import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 64
  },
  item: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  headline: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  subline: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 5
  },
  title: {
    fontSize: 14,
    color: 'blue',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50
  },
  score: {
    fontSize: 12,
    color: 'green',
    textAlign: 'center',
    width: 50
  },
  byline: {
    color: 'grey',
    fontSize: 12
  },
  padLeft: {
    paddingLeft: 10
  },
  footer: {
    marginBottom: 80
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey'
  }
});
