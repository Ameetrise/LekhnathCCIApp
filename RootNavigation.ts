// RootNavigation.js

import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './appsrc/screens/ScreensProps';
import {StackNavigationProp} from '@react-navigation/stack';

export const navigationRef =
  createNavigationContainerRef<StackNavigationProp<RootStackParamList>>();

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function reset() {
  if (navigationRef.isReady()) {
    navigationRef.reset({key: 'this', index: 0, routes: [], routeNames: []});
  }
}

export function replace() {
  if (navigationRef.isReady()) {
  }
}
// add other navigation functions that you need and export them
