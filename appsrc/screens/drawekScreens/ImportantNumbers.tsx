import React from 'react';
import Container from '../container/Container';
import {ImportantNumbersScreenProp} from '../ScreensProps';
import CustomText from '../../components/views/CustomText';

export default function ImportantNumbers({
  navigation,
}: ImportantNumbersScreenProp) {
  return (
    <Container showBackButton backButtonPress={(): void => navigation.goBack()}>
      <CustomText>ImportantNumbers</CustomText>
    </Container>
  );
}
