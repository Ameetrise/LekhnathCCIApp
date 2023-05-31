import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    // fontWeight: '700',
  },
  bodyContainer: {
    alignSelf: 'stretch',
    width: '100%',
    height: '95%',
    paddingLeft: '14%',
    paddingRight: '7%',
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: '7%',
  },
  menu: {
    position: 'absolute',
    alignSelf: 'center',
    left: 25,
  },
});

export default styles;
