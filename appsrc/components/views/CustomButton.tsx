import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Dimens from '../../config/Dimens';
import CustomColors from '../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import {View} from 'react-native-animatable';

export default function CustomButton({
  title,
  style,
  backgroundColor,
  flex,
  textColor,
  onPress,
}: {
  style?:
    | ViewStyle
    | TouchableOpacityProps
    | TouchableOpacityProps[]
    | ViewStyle[];
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
        style,
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
    borderRadius: Dimens.ms6,
  },
});
