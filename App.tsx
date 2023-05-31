import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './appsrc/screens/ScreensProps';
import FeedsRoot from './appsrc/screens/feeds/FeedsRoot';
import MembersRoot from './appsrc/screens/members/MembersRoot';

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  useEffect(() => {
    console.log('App');
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FeedsRoot"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FeedsRoot" component={FeedsRoot} />
        <Stack.Screen name="MembersRoot" component={MembersRoot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
