import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';

const width = Dimensions.get('screen').width;
export default function Container({children}: {children: JSX.Element}) {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
}
