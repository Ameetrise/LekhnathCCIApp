/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Toggle from 'react-native-toggle-element';
import drawerStyles from './drawerStyles';
import ReactNativeModal from 'react-native-modal';
import {CustomColors} from '../../config/CustomColors';
import CustomText from '../views/CustomText';
import Images from '../../assets/Images';
import VectorIcon from '../VectorIcons';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import Line from '../views/Line';
import {ToggleButton} from 'react-native-paper';

/**
 * The Menu modal that appears on the top left portion of the screen. User can navigate
 * throughout the app through this component.
 */
function Drawer({
  shouldShow,
  onBackdropPress,
}: {
  shouldShow: boolean;
  onBackdropPress: () => void;
  fullname: {firstName: string; lastName: string};
}): JSX.Element {
  const [internalShouldShowMenu, setInternalShouldShowMenu] =
    useState(shouldShow);
  const [toggleValue, setToggleValue] = useState(false);
  return (
    <ReactNativeModal
      propagateSwipe
      scrollOffset={1}
      deviceHeight={Dimensions.get('screen').height}
      deviceWidth={Dimensions.get('screen').width}
      isVisible={internalShouldShowMenu}
      onBackdropPress={(): void => setInternalShouldShowMenu(false)}
      onModalHide={onBackdropPress}
      animationIn="slideInLeft"
      animationOut="slideOutLeft">
      <View style={drawerStyles.container}>
        <View
          style={{
            height: '30%',
            paddingTop: 48,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: CustomColors.white,
            margin: 0,
          }}>
          <Image
            resizeMode="contain"
            source={Images.logo}
            style={{height: '40%'}}
          />
          <CustomText>LCCI Chamber-Road</CustomText>
          <CustomText>Bhandardik</CustomText>
        </View>
        <View>
          <MenuItem
            icon={
              <VectorIcon
                style={{flex: 1}}
                iconFamily={'AntDesign'}
                iconName={'home'}
                iconSize={18}
                iconColor={CustomColors.primaryColorDark}
              />
            }
            title={'Home'}
          />
          <MenuItem
            icon={
              <VectorIcon
                style={{flex: 1}}
                iconFamily={'Feather'}
                iconName={'list'}
                iconSize={18}
                iconColor={CustomColors.primaryColorDark}
              />
            }
            title={'Important Numbers'}
          />
          <MenuItem
            icon={
              <VectorIcon
                style={{flex: 1}}
                iconFamily={'Ionicons'}
                iconName={'information-circle-outline'}
                iconSize={18}
                iconColor={CustomColors.primaryColorDark}
              />
            }
            title={'About Us'}
          />
          <MenuItem
            icon={
              <VectorIcon
                style={{flex: 1}}
                iconFamily={'MaterialCommunityIcons'}
                iconName={'phone-dial-outline'}
                iconSize={18}
                iconColor={CustomColors.primaryColorDark}
              />
            }
            title={'Contact Us'}
          />
        </View>
        <Line />
        <MenuItem
          icon={
            <VectorIcon
              style={{flex: 1}}
              iconFamily={'Feather'}
              iconName={'log-out'}
              iconSize={18}
              iconColor={CustomColors.primaryColorDark}
            />
          }
          title={'Log Out'}
        />
        <MenuItem
          icon={
            <VectorIcon
              style={{flex: 1}}
              iconFamily={'FontAwesome'}
              iconName={'code'}
              iconSize={18}
              iconColor={CustomColors.primaryColorDark}
            />
          }
          title={'Developers'}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <CustomText>{toggleValue ? 'Dark' : 'Light'}</CustomText>
          <Toggle
            value={toggleValue}
            onPress={newState => setToggleValue(newState)}
            thumbActiveComponent={
              <VectorIcon
                iconFamily={'Feather'}
                iconName={'moon'}
                iconSize={18}
                iconColor={CustomColors.black}
              />
            }
            thumbInActiveComponent={
              <VectorIcon
                iconFamily={'Feather'}
                iconName={'sun'}
                iconSize={18}
                iconColor={CustomColors.black}
              />
            }
            thumbButton={{
              height: 30,
              width: 30,
              activeColor: CustomColors.white,
              inActiveColor: CustomColors.lightBlack,
              activeBackgroundColor: CustomColors.white,
              inActiveBackgroundColor: CustomColors.white,
            }}
            trackBarStyle={{height: 30}}
            trackBar={{
              radius: 14,
              activeBackgroundColor: CustomColors.lightBlack,
              inActiveBackgroundColor: CustomColors.whiteShade3,
              borderActiveColor: CustomColors.lightBlack,
              borderInActiveColor: CustomColors.whiteShade1,
              borderWidth: 2,
              width: 60,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: '4%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <CustomText>LCCI</CustomText>
        </View>
      </View>
    </ReactNativeModal>
  );
}

const MenuItem = ({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        paddingHorizontal: '6%',
        paddingVertical: '3%',
        alignItems: 'center',
      }}>
      {icon}
      <CustomText style={{flex: 5, paddingHorizontal: 4}}>{title}</CustomText>
    </TouchableOpacity>
  );
};

Drawer.propTypes = {
  shouldShow: PropTypes.bool,
  onBackdropPress: PropTypes.func.isRequired,
  fullname: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

Drawer.defaultProps = {
  shouldShow: false,
};

export default Drawer;
