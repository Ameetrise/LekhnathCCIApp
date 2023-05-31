import {StyleSheet} from 'react-native';
import {CustomColors} from '../../config/CustomColors';

const drawerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    paddingHorizontal: '8%',
    paddingVertical: '10%',
    width: '70%',
    height: '80%',
    borderRadius: 15,
    backgroundColor: CustomColors.whiteShade1,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'pink',
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
    color: 'pink',
  },
  menuItemsContainer: {
    marginTop: '8%',
  },
  textStyle: {
    marginHorizontal: 15,
    marginBottom: 3,
    color: CustomColors.accentColor,
  },
  infoTextContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  infoTextStyle: {
    color: 'purple',
    fontSize: 12,
  },
  nameText: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  licenseText: {
    marginTop: '1%',
    color: 'blue',
    fontSize: 14,
  },
  accountIcon: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  accountImage: {
    width: '52%',
    alignContent: 'center',
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
  },
  userInfoContainer: {
    paddingHorizontal: '3%',
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'yellow',
    borderBottomWidth: 0.5,
  },
  userInfoLeft: {
    width: '73%',
    justifyContent: 'space-around',
  },
});
export default drawerStyles;
