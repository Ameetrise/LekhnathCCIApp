import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Dimens from '../../config/Dimens';

export default function CustomButton({
  title,
  backgroundColor,
  flex,
  textColor,
  onPress,
}: {
  title: string;
  backgroundColor: string;
  flex?: number;
  textColor?: string;
  onPress: (value: string) => void;
}): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => onPress(title)}
      style={[
        styles.container,
        {backgroundColor: backgroundColor, flex: flex ? flex : 1},
      ]}>
      <Text style={{color: textColor || 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Dimens.ms6,
    borderRadius: Dimens.ms6,
  },
});
