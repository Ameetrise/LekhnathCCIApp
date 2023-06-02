import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FeedsRootScreenProp, RootStackParamList} from '../ScreensProps';
import FeedDetails from './screens/FeedDetails';
import Feeds from './screens/Feeds';

const Stack = createStackNavigator<RootStackParamList>();

const FeedsRoot = ({}: FeedsRootScreenProp): any => {
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
};

export default FeedsRoot;
