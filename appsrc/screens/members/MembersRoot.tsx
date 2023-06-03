import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MembersPage from '../members/screens/MembersPage';
import {MembersRootScreenProp} from '../ScreensProps';
import Members from './screens/Members';

const Stack = createStackNavigator();

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
      <Stack.Screen name="Memberspage" component={MembersPage} />
    </Stack.Navigator>
  );
}
