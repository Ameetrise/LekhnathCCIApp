/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Container from '../container/Container';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import CustomText from '../../components/views/CustomText';
import {View} from 'react-native';

export default function Profile() {
  const [userInfo, setUserInfo] = useState();
  const loginWithGoogle = async (): Promise<void> => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('no play services');
      } else {
        console.log('error: ', error.message);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '838466258748-mc65gibfkigeosct8mlddluqlq8a2bs0.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);

  return (
    <Container scrollable headerTitle="Profile" wideSymmetrical>
      <View style={{paddingBottom: 48}}>
        <GoogleSigninButton
          onPress={() => {
            loginWithGoogle();
          }}
        />
        <CustomText>{JSON.stringify(userInfo)}</CustomText>
      </View>
    </Container>
  );
}
