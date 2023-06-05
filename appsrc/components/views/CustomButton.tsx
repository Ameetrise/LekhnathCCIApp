import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Dimens from '../../config/Dimens';
import CustomColors from '../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';

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
  const isDarkMode = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <TouchableOpacity
      onPress={() => onPress(title)}
      style={[
        styles.container,
        {backgroundColor: backgroundColor, flex: flex ? flex : 1},
      ]}>
      <Text style={{color: textColor || CustomColors(isDarkMode).white}}>
        {title}
      </Text>
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
