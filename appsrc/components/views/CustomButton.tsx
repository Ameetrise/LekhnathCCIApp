import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Dimens from '../../config/Dimens';
import CustomColors from '../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import CustomText from './CustomText';

export default function CustomButton({
  title,
  style,
  backgroundColor,
  flex,
  loading = false,
  disabled,
  textColor,
  onPress,
}: {
  style?:
    | ViewStyle
    | TouchableOpacityProps
    | TouchableOpacityProps[]
    | ViewStyle[];
  title: string;
  loading?: boolean;
  disabled?: boolean;
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
      disabled={disabled}
      onPress={() => onPress(title)}
      style={[
        styles.container,
        {backgroundColor: backgroundColor, flex: flex ? flex : 1},
        style,
      ]}>
      {loading && <ActivityIndicator />}
      {!loading && (
        <CustomText
          color={textColor || CustomColors(isDarkMode).white}
          style={{}}>
          {title}
        </CustomText>
      )}
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
