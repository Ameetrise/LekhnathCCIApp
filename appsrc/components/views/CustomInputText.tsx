import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Dimens from '../../config/Dimens';
import CustomColors from '../../config/CustomColors';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';

export default function CustomInputText({placeholder}: {placeholder: string}) {
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
      <TextInput style={styles.inputStyle} placeholder={placeholder} />
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
    padding: '5%',
  },
});
