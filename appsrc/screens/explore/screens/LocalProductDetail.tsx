import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../container/Container';
import CustomText from '../../../components/views/CustomText';
import {LocalProductDetailScreenProp} from '../../ScreensProps';

export default function LocalProductDetail({
  navigation,
}: LocalProductDetailScreenProp) {
  return (
    <Container
      headerTitle="Product Detail"
      wideSymmetrical
      showBackButton
      backButtonPress={() => {
        navigation.goBack();
      }}>
      <View>
        <CustomText>Hello</CustomText>
      </View>
    </Container>
  );
}
