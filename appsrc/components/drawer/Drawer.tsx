/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
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
import CustomText from '../views/CustomText';
import Images from '../../assets/Images';
import VectorIcon from '../VectorIcons';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';
import Line from '../views/Line';
import {useNavigation} from '@react-navigation/native';
import {ShowMenuContext} from '../Modal/modalProvider';
import CustomColors from '../../config/CustomColors';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import {
  setCurrentCompanyIndex,
  setDarkMode,
} from '../../redux/actions/userAction';
import Dimens, {s} from '../../config/Dimens';
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
}): JSX.Element {
  const {setShouldShowMenu} = useContext(ShowMenuContext);
  const [internalShouldShowMenu, setInternalShouldShowMenu] =
    useState(shouldShow);
  const [toggleValue, setToggleValue] = useState(false);
  const nav = useNavigation();
  const userState = useSelector((state: AppState) => state.userReducer);
  const appState = useSelector((state: AppState) => state.appStateReducer);
  const theme = appState.isDarkMode;
  const dispatch = useDispatch();
  const closeAndNavigate = (navigateFunc: () => void) => {
    // setInternalShouldShowMenu(false);
    setShouldShowMenu(false);
    navigateFunc();
  };

  const IconColor = CustomColors(theme).accentColorDark;

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
      <View
        style={[
          drawerStyles.container,
          {backgroundColor: CustomColors(theme).whiteShade1},
        ]}>
        <View
          style={{
            // height: '40%',
            marginTop: 24,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: CustomColors(theme).whiteShade1,
            margin: 0,
          }}>
          <CustomText
            font="Montserrat-SemiBold"
            style={{
              paddingVertical: 4,
            }}>
            {'Namaste'}
          </CustomText>
          <CustomText
            color={CustomColors(theme).primaryColor}
            font="Montserrat-SemiBold"
            style={{
              paddingVertical: 4,
            }}>
            {userState.user.name}
          </CustomText>
          <Image
            resizeMode="contain"
            source={{
              uri: userState.user.companies[userState.currentCompanyIndex]
                .clogo,
            }}
            style={{
              height: s(120),
              width: s(120),
              borderRadius: s(70),
              borderWidth: 1,
              borderColor: CustomColors(theme).whiteShade2,
              backgroundColor: CustomColors(theme).whiteShade2,
              marginVertical: '4%',
            }}
          />
          <View
            style={{
              width: '100%',
              paddingVertical: 12,
              backgroundColor: CustomColors(theme).whiteShade2,
            }}>
            <CustomText
              font="Montserrat-Semibold"
              style={{
                paddingLeft: '12%',
              }}>
              Select Company
            </CustomText>
            {userState.user.companies.map((company, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(setCurrentCompanyIndex(index));
                  }}
                  key={company.id}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: '12%',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                  }}>
                  <CustomText
                    color={
                      userState.currentCompanyIndex === index
                        ? CustomColors(theme).primaryColor
                        : CustomColors(theme).black
                    }
                    style={{}}>
                    {company.cname}
                  </CustomText>
                  {userState.currentCompanyIndex === index && (
                    <VectorIcon
                      iconFamily={'Octicons'}
                      iconName={'check'}
                      iconSize={18}
                      iconColor={CustomColors(theme).primaryColor}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View>
          <MenuItem
            onPress={() => {
              closeAndNavigate((): void => nav.navigate('FeedsRoot'));
            }}
            icon={
              <VectorIcon
                style={{flex: 1}}
                iconFamily={'AntDesign'}
                iconName={'home'}
                iconSize={18}
                iconColor={IconColor}
              />
            }
            title={'Home'}
          />
          <MenuItem
            onPress={() => {
              closeAndNavigate((): void => nav.navigate('ImportantNumbers'));
            }}
            icon={
              <VectorIcon
                style={{flex: 1}}
                iconFamily={'Feather'}
                iconName={'list'}
                iconSize={18}
                iconColor={IconColor}
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
                iconColor={IconColor}
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
                iconColor={IconColor}
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
              iconColor={IconColor}
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
              iconColor={IconColor}
            />
          }
          title={'Developers'}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -24,
          }}>
          <CustomText>{appState.isDarkMode ? 'Dark' : 'Light'}</CustomText>
          <Toggle
            value={appState.isDarkMode}
            onPress={newState => {
              setToggleValue(!newState);
              dispatch(setDarkMode(!newState));
            }}
            thumbActiveComponent={
              <VectorIcon
                iconFamily={'Feather'}
                iconName={'moon'}
                iconSize={18}
                iconColor={CustomColors(theme).black}
              />
            }
            thumbInActiveComponent={
              <VectorIcon
                iconFamily={'Feather'}
                iconName={'sun'}
                iconSize={18}
                iconColor={CustomColors(theme).black}
              />
            }
            thumbButton={{
              height: 30,
              width: 30,
              activeColor: CustomColors(theme).white,
              inActiveColor: CustomColors(theme).lightBlack,
              activeBackgroundColor: CustomColors(theme).white,
              inActiveBackgroundColor: CustomColors(theme).white,
            }}
            trackBarStyle={{height: 30}}
            trackBar={{
              radius: 14,
              activeBackgroundColor: CustomColors(theme).lightBlack,
              inActiveBackgroundColor: CustomColors(theme).whiteShade3,
              borderActiveColor: CustomColors(theme).lightBlack,
              borderInActiveColor: CustomColors(theme).whiteShade1,
              borderWidth: 2,
              width: 60,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: s(12),
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <CustomText>© LCCI</CustomText>
          <CustomText style={{fontSize: 10}}>2023</CustomText>
        </View>
      </View>
    </ReactNativeModal>
  );
}

const MenuItem = ({
  icon,
  title,
  onPress,
}: {
  icon: JSX.Element;
  title: string;
  onPress?: () => void;
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
};

Drawer.defaultProps = {
  shouldShow: false,
};

export default Drawer;
