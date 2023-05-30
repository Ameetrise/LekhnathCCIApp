import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CustomText({value}: {value: string}): JSX.Element {
  return (
    <View>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#1d002e',
  },
});
