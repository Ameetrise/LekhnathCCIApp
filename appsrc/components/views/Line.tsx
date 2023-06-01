import {View, Text} from 'react-native';
import React from 'react';
import {CustomColors} from '../../config/CustomColors';

export default function Line() {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: CustomColors.whiteShade3,
      }}
    />
  );
}
