/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

import drawerStyles from './drawerStyles';
import ReactNativeModal from 'react-native-modal';
import {CustomColors} from '../../config/CustomColors';
import CustomText from '../views/CustomText';

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
              backgroundColor: CustomColors.offWhite,
              margin: 4,
            }}>
            <CustomText>{Math.random().toString()}</CustomText>
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
