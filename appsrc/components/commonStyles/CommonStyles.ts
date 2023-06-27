import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  allCenter: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 2,
  },
  border: {
    borderWidth: 0.3,
    borderColor: 'grey',
  },
});

export default commonStyles;
