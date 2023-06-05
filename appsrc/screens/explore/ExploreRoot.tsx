import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from './screens/Explore';
import {ExploreRootScreenProp, RootStackParamList} from '../ScreensProps';
import LocalProducts from './screens/LocalProducts';
import LocalSites from './screens/LocalSites';
import LocalProductDetail from './screens/LocalProductDetail';
import LocalSiteDetail from './screens/LocalSiteDetail';

const Stack = createStackNavigator<RootStackParamList>();

const ExploreRoot = ({}: ExploreRootScreenProp): any => {
  return (
    <Stack.Navigator
      initialRouteName="Feeds"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="LocalProducts" component={LocalProducts} />
      <Stack.Screen name="LocalSites" component={LocalSites} />
      <Stack.Screen name="LocalProductDetail" component={LocalProductDetail} />
      <Stack.Screen name="LocalSiteDetail" component={LocalSiteDetail} />
    </Stack.Navigator>
  );
};

export default ExploreRoot;
