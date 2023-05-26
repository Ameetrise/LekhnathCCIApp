/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {persistor, store} from './appsrc/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default function Root(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
