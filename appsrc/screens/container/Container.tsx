/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
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
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';
import CustomText from '../../components/views/CustomText';

export default function Container({
  headerTitle,
  children,
  backButtonPress,
  showBackButton,
  narrowMode,
  scrollable,
  wideSymmetrical,
  fullScreen,
  wholeScreen, // wholeScreen = true means that the
}: // children is all that is returned from this component
{
  headerTitle: string;
  children: JSX.Element;
  backButtonPress?: () => void;
  showBackButton?: boolean;
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
      <View style={styles.headerContainer}>
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
        <CustomText style={[styles.title, {fontSize: 23}]}>
          {headerTitle}
        </CustomText>
      </View>
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
