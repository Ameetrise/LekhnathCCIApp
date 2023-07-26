/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Container from '../container/Container';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import CustomText from '../../components/views/CustomText';
import {View} from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import SignInWithGoogleSuccessModal from '../../dataTypes/user/GoogleLoginUserSuccess';

export default function Profile() {
  const [userInfo, setUserInfo] = useState<SignInWithGoogleSuccessModal>();
  const [fbuserInfo, setFbUserInfo] = useState();

  const getInfoFromToken = (token: any): void => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name, picture, hometown',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          setFbUserInfo(result);
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

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
      {'a' === 'a' ? (
        <View style={{paddingBottom: 48}}>
          <GoogleSigninButton
            onPress={() => {
              loginWithGoogle();
            }}
          />
          <CustomText>{JSON.stringify(userInfo?.user)}</CustomText>

          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  getInfoFromToken(data?.accessToken);
                });
                console.log(result);
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          />
        </View>
      ) : (
        <View />
      )}
    </Container>
  );
}
