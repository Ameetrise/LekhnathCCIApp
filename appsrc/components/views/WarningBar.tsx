/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomColors} from '../../config/CustomColors';

export default function WarningBar({
  onPressCancel,
  isHomePage,
  style,
}: {
  onPressCancel: () => void;
  isHomePage: boolean;
  style?: StyleProp<ViewStyle>;
}): JSX.Element {
  const homePageStyle: StyleProp<ViewStyle> = {
    top: '7%',
    width: '100%',
  };

  const basicScreenStyle: StyleProp<ViewStyle> = {
    bottom: '7%',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 15,
    paddingHorizontal: '3%',
  };
  return (
    <View
      style={[
        {
          zIndex: 1000,
          position: 'absolute',
          backgroundColor: CustomColors.warningColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '8%',
          padding: '1%',
        },
        isHomePage ? homePageStyle : basicScreenStyle,
        style,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#D95F5F',
            padding: 6,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E16D6D',
              padding: 5,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="exclamation-triangle"
              size={20}
              color={CustomColors.white}
            />
          </View>
        </View>
        <Text style={{color: CustomColors.white, marginHorizontal: '5%'}}>
          Not connected to internet
        </Text>
      </View>
      <TouchableOpacity
        hitSlop={{
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        }}
        onPress={onPressCancel}
        activeOpacity={0.9}
        style={{marginHorizontal: '3%'}}>
        <FontAwesome name="times" size={15} color={CustomColors.white} />
      </TouchableOpacity>
    </View>
  );
}
