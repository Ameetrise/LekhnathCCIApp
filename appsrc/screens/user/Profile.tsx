/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Container from '../container/Container';
import CustomText from '../../components/views/CustomText';
import {TouchableOpacity} from 'react-native';

export default function Profile() {
  const loginWithGoogle = (): void => {
    console.log('Clicked');
  };

  return (
    <Container headerTitle="Profile" wideSymmetrical>
      <TouchableOpacity
        onPress={loginWithGoogle}
        style={{justifyContent: 'center', alignSelf: 'center'}}>
        <CustomText color="blue">Profile</CustomText>
      </TouchableOpacity>
    </Container>
  );
}
