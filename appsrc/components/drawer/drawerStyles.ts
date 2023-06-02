import {Dimensions, StyleSheet} from 'react-native';

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '70%',
    left: -20,
    height: Dimensions.get('screen').height,
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
