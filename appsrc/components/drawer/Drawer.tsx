/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import drawerStyles from './drawerStyles';
import ReactNativeModal from 'react-native-modal';

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
      isVisible={internalShouldShowMenu}
      onBackdropPress={(): void => setInternalShouldShowMenu(false)}
      onModalHide={onBackdropPress}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      swipeDirection="left">
      <View style={drawerStyles.container}>
        <ScrollView
          nestedScrollEnabled
          contentContainerStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}>
          <View>
            <View style={drawerStyles.menuItemsContainer}>
              <Text>Hello im menu</Text>
            </View>
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
