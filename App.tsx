import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNav from './appsrc/screens/tabNav/TabNav';
import {useSelector} from 'react-redux';
import {AppState} from './appsrc/redux/store';
import Login from './appsrc/screens/user/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './appsrc/screens/ScreensProps';
import ImportantNumbers from './appsrc/screens/drawekScreens/ImportantNumbers';
import {Text, View} from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  const user = useSelector((state: AppState) => state.userReducer);
  useEffect(() => {}, []);
  return (
    <>
      {user?.user?.user?.id && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FeedsRoot">
            <Stack.Screen
              name="TabNav"
              component={TabNav}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ImportantNumbers"
              component={ImportantNumbers}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
      {!user.user?.user?.id && <Login />}
    </>
  );
};

export default App;

//strings file for all strings
//dark mode theme
//get original apis
