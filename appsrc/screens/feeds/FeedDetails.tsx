import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import {FeedDetailsScreenProp} from '../ScreensProps';

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
      <Text>Feed Details</Text>
    </Container>
  );
}
