import {StyleSheet} from 'react-native';
import CustomColors from '../../config/CustomColors';

export function ContainerStyling(isDarkTheme: boolean) {
  return StyleSheet.create({
    container: {
      marginTop: 18,
      width: '100%',
    },
    title: {
      alignSelf: 'center',
      width: '60%',
      maxHeight: 180,
      color: 'white',
      // fontWeight: '700',
    },
    bodyContainer: {
      alignSelf: 'stretch',
      width: '100%',
      height: '95%',
      paddingLeft: '14%',
      paddingRight: '7%',
      backgroundColor: CustomColors(isDarkTheme).backgroundColor,
    },
    headerContainer: {
      backgroundColor: CustomColors(isDarkTheme).primaryColor,
      position: 'relative',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      height: '7%',
    },
    menu: {
      color: CustomColors(isDarkTheme).allWhite,
      position: 'absolute',
      alignSelf: 'center',
      left: 25,
    },
  });
}
