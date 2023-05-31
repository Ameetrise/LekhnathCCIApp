/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

import drawerStyles from './drawerStyles';
import ReactNativeModal from 'react-native-modal';
import Images from '../../assets/Images';
import {CustomColors} from '../../config/CustomColors';

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

  useEffect(() => {
    console.log('Drawer: ', Math.random());
  }, []);

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingVertical: 48,
              backgroundColor: CustomColors.primaryColor,
              margin: 4,
            }}>
            <Text>{Math.random()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 48,
              backgroundColor: CustomColors.primaryColor,
              margin: 4,
            }}>
            <Text>{Math.random()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 48,
              backgroundColor: CustomColors.primaryColor,
              margin: 4,
            }}>
            <Text>{Math.random()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 48,
              backgroundColor: CustomColors.primaryColor,
              margin: 4,
            }}>
            <Text>{Math.random()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 48,
              backgroundColor: CustomColors.primaryColor,
              margin: 4,
            }}>
            <Text>{Math.random()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 48,
              backgroundColor: CustomColors.primaryColor,
              margin: 4,
            }}>
            <Text>{Math.random()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 48,
              backgroundColor: CustomColors.primaryColor,
              margin: 4,
            }}>
            <Text>{Math.random()}</Text>
          </View>
        </ScrollView>
      </View>
    </ReactNativeModal>
  );
}

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
  fullname: {firstName: 'Firstname', lastName: 'LastName'},
};

export default Drawer;
