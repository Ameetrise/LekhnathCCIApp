import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import CustomText from '../../components/views/CustomText';

export default function Members() {
  return (
    <Container headerTitle="Members" wideSymmetrical>
      <CustomText>Members</CustomText>
    </Container>
  );
}
