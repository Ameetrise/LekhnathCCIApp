/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {persistor, store} from './appsrc/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {
  AlertContext,
  ShowMenuContext,
} from './appsrc/components/Modal/modalProvider';
import {Button} from 'react-native';

export default function Root(): JSX.Element {
  const [alertMessage, setAlertMessage] = useState('');
  const [shouldShowAlert, setShouldShowAlert] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ShowMenuContext.Provider
          value={{
            shouldShowMenu,
            setShouldShowMenu,
          }}>
          <AlertContext.Provider
            value={{
              alertMessage,
              setAlertMessage,
              setShouldShowAlert,
              shouldShowAlert,
            }}>
            <App />
            {/* <Button
              title="Alert"
              onPress={() => {
                setAlertMessage('This is home');
                setShouldShowAlert(!shouldShowAlert);
              }}
            />

            <Button
              title="Drawer"
              onPress={() => {
                setShouldShowMenu(true);
              }}
            /> */}
          </AlertContext.Provider>
        </ShowMenuContext.Provider>
      </PersistGate>
    </Provider>
  );
}
