/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  TextInputProps,
} from 'react-native';
import React from 'react';
import Dimens from '../../config/Dimens';
import CustomColors from '../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import type {KeyboardType} from 'react-native';
import CustomText from './CustomText';

export default function CustomInputText({
  style,
  title,
  height,
  numberOfLines,
  multiline,
  placeholder,
  value,
  onFocus,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}: {
  title?: string;
  height?: number;
  onFocus?: () => void;
  multiline?: boolean;
  style?: StyleProp<TextInputProps>;
  numberOfLines?: number;
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
}) {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );
  return (
    <View>
      {title && (
        <CustomText
          color={CustomColors(theme).primaryColorDark}
          style={{paddingHorizontal: '2%', fontSize: 10, paddingBottom: '1%'}}>
          {title}
        </CustomText>
      )}
      <View
        style={[
          styles.textInputContainer,
          {
            backgroundColor: CustomColors(theme).white,
            shadowColor: CustomColors(theme).black,
          },
        ]}>
        <TextInput
          autoComplete={'off'}
          autoCorrect={false}
          placeholderTextColor={CustomColors(theme).whiteShade2}
          value={value}
          onChangeText={text => {
            onChangeText(text);
          }}
          onFocus={onFocus}
          numberOfLines={numberOfLines}
          multiline={multiline}
          style={[styles.inputStyle, style, {height: height, maxHeight: 120}]}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    // height: Dimens.ms35,
    paddingVertical: '3%',
    padding: '1%',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginBottom: '5%',
  },
  inputStyle: {
    width: '100%',
    paddingHorizontal: '2%',
    fontFamily: 'Montserrat-Regular',
  },
});
