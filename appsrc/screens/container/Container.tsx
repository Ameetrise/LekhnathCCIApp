/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  AlertContext,
  NetInfoContext,
  ShowMenuContext,
} from '../../components/Modal/modalProvider';
import Drawer from '../../components/drawer/Drawer';
import AlertMessage from '../../components/Modal/AlertModal';
import WarningBar from '../../components/views/WarningBar';
import {ContainerStyling} from './styles';
import {useIsFocused} from '@react-navigation/native';
import CustomText from '../../components/views/CustomText';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import CustomColors from '../../config/CustomColors';
import {s} from '../../config/Dimens';

type RightIconTypes = {name: string; onPress: () => void};

export default function Container({
  headerTitle,
  rightIcon,
  children,
  backButtonPress,
  showBackButton,
  headerShown = true,
  narrowMode,
  scrollable,
  wideSymmetrical,
  fullScreen,
  wholeScreen, // wholeScreen = true means that the
}: // children is all that is returned from this component
{
  headerTitle: string;
  rightIcon?: RightIconTypes;
  children: JSX.Element;
  backButtonPress?: () => void;
  showBackButton?: boolean;
  headerShown?: boolean;
  narrowMode?: boolean;
  scrollable?: boolean;
  wideSymmetrical?: boolean;
  fullScreen?: boolean;
  wholeScreen?: boolean;
}): JSX.Element {
  const {shouldShowMenu, setShouldShowMenu} = useContext(ShowMenuContext);
  const {alertMessage, shouldShowAlert, setShouldShowAlert} =
    useContext(AlertContext);
  const {netInfo} = useContext(NetInfoContext);
  const [showNetWarningBar, setShowNetWarningBar] = useState(netInfo);
  const isFocused = useIsFocused();
  useEffect(() => {
    setShowNetWarningBar(true);
  }, [netInfo]);

  const appState = useSelector((state: AppState) => state.appStateReducer);
  const theme = appState.isDarkMode;
  const styles = ContainerStyling(appState.isDarkMode);

  return wholeScreen ? (
    children
  ) : (
    <SafeAreaView>
      {shouldShowMenu && isFocused && (
        <Drawer
          shouldShow={shouldShowMenu}
          onBackdropPress={(): void => setShouldShowMenu(false)}
        />
      )}
      <AlertMessage
        shouldShow={shouldShowAlert}
        alertMessage={alertMessage}
        onPressOk={(): void => setShouldShowAlert(false)}
      />
      {!netInfo && showNetWarningBar && (
        <WarningBar
          isHomePage={false}
          onPressCancel={() => setShowNetWarningBar(false)}
        />
      )}
      {headerShown && (
        <View
          style={[
            styles.headerContainer,
            {backgroundColor: CustomColors(theme).white},
          ]}>
          {showBackButton ? (
            <Icon
              name="keyboard-arrow-left"
              size={28}
              style={[styles.menu, {fontSize: 40, left: 20}]}
              onPress={backButtonPress}
            />
          ) : (
            <Icon
              name="menu"
              size={30}
              style={styles.menu}
              onPress={(): void => setShouldShowMenu(true)}
            />
          )}
          <CustomText
            font="Montserrat-SemiBold"
            color={CustomColors(theme).primaryColor}
            style={[
              styles.title,
              {
                textAlign: headerTitle.length > 15 ? 'center' : 'left',
                fontSize: headerTitle.length > 15 ? s(12) : s(16),
                left: s(54),
              },
            ]}>
            {headerTitle}
          </CustomText>
          {rightIcon && (
            <Icon
              color={CustomColors(theme).primaryColor}
              name={rightIcon?.name}
              size={24}
              style={{
                alignSelf: 'center',
                position: 'absolute',
                right: s(24),
              }}
              onPress={(): void => rightIcon.onPress()}
            />
          )}
        </View>
      )}
      {scrollable ? (
        <ScrollView
          overScrollMode="never"
          style={[
            styles.bodyContainer,
            {overflow: 'scroll'},
            narrowMode ? {paddingRight: '14%'} : {},
          ]}>
          {children}
        </ScrollView>
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={[
            styles.bodyContainer,
            narrowMode ? {paddingRight: '14%'} : {},
            wideSymmetrical ? {paddingLeft: '7%', paddingRight: '7%'} : {},
            fullScreen
              ? {
                  paddingLeft: '0%',
                  paddingRight: '0%',
                }
              : {},
          ]}>
          {children}
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

Container.propTypes = {
  headerTitle: PropTypes.string,
  children: PropTypes.element,
  backButtonPress: PropTypes.func,
  showBackButton: PropTypes.bool,
  narrowMode: PropTypes.bool,
  scrollable: PropTypes.bool,
  wideSymmetrical: PropTypes.bool,
  fullScreen: PropTypes.bool,
  wholeScreen: PropTypes.bool,
};

Container.defaultProps = {
  headerTitle: '',
  children: <></>,
  showBackButton: false,
  backButtonPress: (): void => console.log('back button pressed'),
  narrowMode: false,
  scrollable: false,
  wideSymmetrical: false,
  fullScreen: false,
  wholeScreen: false,
};
