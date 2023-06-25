import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MembersPage from '../members/screens/MembersPage';
import {MembersRootScreenProp, RootStackParamList} from '../ScreensProps';
import Members from './screens/Members';
import Chat from './screens/Chat';

const Stack = createStackNavigator<RootStackParamList>();

export default function MembersRoot({
  navigation,
}: MembersRootScreenProp): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Feeds"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Members" component={Members} />
      <Stack.Screen name="MembersPage" component={MembersPage} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
