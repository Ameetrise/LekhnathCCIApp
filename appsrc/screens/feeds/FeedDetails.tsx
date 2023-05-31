import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import {FeedDetailsScreenProp} from '../ScreensProps';
import CustomText from '../../components/views/CustomText';

export default function FeedDetails({
  navigation,
  route,
}: FeedDetailsScreenProp): JSX.Element {
  return (
    <Container
      showBackButton
      backButtonPress={(): void => navigation.goBack()}
      headerTitle="Feed Details"
      wideSymmetrical>
      <CustomText>Feed Details</CustomText>
    </Container>
  );
}
