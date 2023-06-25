import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Dimens from '../../config/Dimens';
import CustomColors from '../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import type {KeyboardType} from 'react-native';

export default function CustomInputText({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}: {
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
    <View
      style={[
        styles.textInputContainer,
        {
          backgroundColor: CustomColors(theme).white,
          shadowColor: CustomColors(theme).black,
        },
      ]}>
      <TextInput
        placeholderTextColor={CustomColors(theme).whiteShade2}
        value={value}
        onChangeText={text => {
          onChangeText(text);
        }}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.inputStyle}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    height: Dimens.ms35,
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
