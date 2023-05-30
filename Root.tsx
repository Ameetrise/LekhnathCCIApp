/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {persistor, store} from './appsrc/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {AlertContext} from './appsrc/components/Modal/modalProvider';
import Login from './appsrc/screens/user/Login';
import {Button} from 'react-native';

export default function Root(): JSX.Element {
  const [alertMessage, setAlertMessage] = useState('');
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AlertContext.Provider
          value={{
            alertMessage,
            setAlertMessage,
            setShouldShowAlert,
            shouldShowAlert,
          }}>
          <Login />
          <Button
            title="Launch"
            onPress={() => {
              setAlertMessage('This is home');
              setShouldShowAlert(!shouldShowAlert);
            }}
          />
        </AlertContext.Provider>
      </PersistGate>
    </Provider>
  );
}
