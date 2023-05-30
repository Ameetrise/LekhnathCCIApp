import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Dimens from '../../config/Dimens';

export default function CustomInputText({placeholder}: {placeholder: string}) {
  return (
    <View style={styles.textInputContainer}>
      <TextInput style={styles.inputStyle} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    height: Dimens.ms35,
    padding: '1%',
    width: '100%',
    backgroundColor: 'white',
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
    shadowColor: 'black',
    marginBottom: '5%',
  },
  inputStyle: {
    padding: '5%',
  },
});
