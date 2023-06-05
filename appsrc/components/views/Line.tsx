/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import CustomColors from '../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';

export default function Line() {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: CustomColors(theme).whiteShade3,
      }}
    />
  );
}
