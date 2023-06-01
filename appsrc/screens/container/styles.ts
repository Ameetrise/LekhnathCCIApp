import {StyleSheet} from 'react-native';
import {CustomColors} from '../../config/CustomColors';

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    width: '60%',
    maxHeight: 180,
    color: CustomColors.primaryColorDark,
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
    backgroundColor: CustomColors.whiteShade1,
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: '7%',
  },
  menu: {
    color: CustomColors.primaryColorDark,
    position: 'absolute',
    alignSelf: 'center',
    left: 25,
  },
});

export default styles;
