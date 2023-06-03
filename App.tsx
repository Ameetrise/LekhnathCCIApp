import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNav from './appsrc/screens/tabNav/TabNav';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from './appsrc/redux/store';
import Login from './appsrc/screens/user/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './appsrc/screens/ScreensProps';
import ImportantNumbers from './appsrc/screens/drawekScreens/ImportantNumbers';
import {Appearance} from 'react-native';
import {setDarkMode} from './appsrc/redux/actions/userAction';

const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  const user = useSelector((state: AppState) => state.userReducer.user);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(
      setDarkMode(Appearance.getColorScheme() === 'dark' ? true : false),
    );
  }, [dispatch]);
  return (
    <>
      {!user.id && <Login />}
      {user.id && (
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
    </>
  );
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="FeedsRoot">
  //       <Stack.Screen
  //         name="TabNav"
  //         component={TabNav}
  //         options={{headerShown: false}}
  //       />
  //       <Stack.Screen
  //         name="ImportantNumbers"
  //         component={ImportantNumbers}
  //         options={{headerShown: false}}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

export default App;

//strings file for all strings
//dark mode theme
//get original apis
