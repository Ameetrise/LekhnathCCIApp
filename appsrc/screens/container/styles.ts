import {Dimensions, StyleSheet} from 'react-native';
import CustomColors from '../../config/CustomColors';

const {width} = Dimensions.get('screen');
export function ContainerStyling(isDarkTheme: boolean) {
  return StyleSheet.create({
    container: {
      marginTop: 18,
      width: '100%',
    },
    title: {
      alignSelf: 'center',
      width: '70%',
      left: width / 2 - width / 4,
      position: 'absolute',
      maxHeight: 180,
      color: CustomColors(isDarkTheme).allWhite,
      // fontWeight: '700',
    },
    bodyContainer: {
      alignSelf: 'stretch',
      width: '100%',
      height: '95%',
      paddingLeft: '14%',
      paddingRight: '7%',
      backgroundColor: CustomColors(isDarkTheme).white,
    },
    headerContainer: {
      backgroundColor: CustomColors(isDarkTheme).primaryColor,
      position: 'relative',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      height: '7%',
    },
    menu: {
      color: CustomColors(isDarkTheme).primaryColor,
      position: 'absolute',
      alignSelf: 'center',
      left: 25,
    },
  });
}
