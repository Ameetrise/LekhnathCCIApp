import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomColors} from '../../config/CustomColors';

export default function CustomText({value}: {value: string}): JSX.Element {
  return (
    <View>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: CustomColors.darkAccent,
  },
});
