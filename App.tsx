import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNav from './appsrc/screens/tabNav/TabNav';
import {useSelector} from 'react-redux';
import {AppState} from './appsrc/redux/store';
import Login from './appsrc/screens/user/Login';

// const Stack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  const user = useSelector((state: AppState) => state.userReducer);
  return (
    <>
      {!user.id && <Login />}
      {user.id && (
        <NavigationContainer>
          <TabNav />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
