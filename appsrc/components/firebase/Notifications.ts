import React, {useEffect} from 'react';
import messaging, {firebase} from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import * as RootNavigation from '../../../RootNavigation';

export default function FirebaseNotifications() {
  useEffect(() => {
    requestNotifUsage();
    notificationOpen();
    onNotificationReceived();
    onBackgroundNotificationReceived();
    getFirebaseToken();
    messaging().subscribeToTopic('guest');
  }, []);

  const getFirebaseToken = async (): Promise<void> => {
    await firebase.messaging().registerDeviceForRemoteMessages();
    const fcmToken = await firebase.messaging().getToken();
    // console.log(fcmToken);
  };

  const onNotificationReceived = (): void => {
    firebase.messaging().onMessage(message => {
      console.log('onreveicead: ', message.data);
      RootNavigation.navigate('FeedsRoot', {
        screen: 'FeedDetails',
        params: {feedItem: message.data},
      });
    });
  };

  const notificationOpen = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          RootNavigation.navigate('FeedsRoot', {
            screen: 'FeedDetails',
            params: {feedItem: remoteMessage.data},
          });
        }
      });
  };

  const onBackgroundNotificationReceived = async (): Promise<void> => {
    firebase.messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('on bgreveirve: ', remoteMessage.data);
      RootNavigation.navigate('FeedsRoot', {
        screen: 'FeedDetails',
        params: {feedItem: remoteMessage.data},
      });
    });
  };

  const requestNotifUsage = async (): Promise<void> => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
}
