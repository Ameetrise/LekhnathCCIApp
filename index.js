/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Root';
// import App from './appsrc/screens/user/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
