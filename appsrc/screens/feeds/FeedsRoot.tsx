import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FeedsRootScreenProp} from '../ScreensProps';
import Feeds from './Feeds';
import FeedDetails from './FeedDetails';

const Stack = createStackNavigator();

export default function FeedsRoot({
  navigation,
}: FeedsRootScreenProp): JSX.Element {
  useEffect(() => {
    console.log('Feeds');
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Feeds"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Feeds" component={Feeds} />
      <Stack.Screen name="FeedDetails" component={FeedDetails} />
    </Stack.Navigator>
  );
}
