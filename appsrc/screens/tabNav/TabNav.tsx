/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import FeedsRoot from '../feeds/FeedsRoot';
import MembersRoot from '../members/MembersRoot';
import VectorIcon from '../../components/VectorIcons';
import React from 'react';
import Profile from '../user/Profile';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import CustomColors from '../../config/CustomColors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomText from '../../components/views/CustomText';
import {s} from '../../config/Dimens';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import ExploreRoot from '../explore/ExploreRoot';

const Tab = createBottomTabNavigator();

function TabNav(): JSX.Element {
  const user = useSelector((state: AppState) => state.userReducer);
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  const activeIconColor = CustomColors(theme).primaryColor;
  const inactiveIconColor = CustomColors(theme).black;
  const inactiveSize = 24;
  const activeSize = 26;

  return (
    <Tab.Navigator
      initialRouteName="FeedsRoot"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: CustomColors(theme).white,
          // height: s(64),
        },
        headerShown: false,
      })}>
      <Tab.Screen
        options={({route}) => ({
          tabBarStyle: (route => {
            return {backgroundColor: CustomColors(theme).white};
          })(route),
          tabBarLabel: ({focused, color}) => (
            <TabBarLabel
              title={'Feeds'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'MaterialCommunityIcons'}
              iconName={'clipboard-list-outline'}
              iconSize={focused ? activeSize : inactiveSize}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        })}
        name="FeedsRoot"
        component={FeedsRoot}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route);
            if (routeName === 'Chat') {
              return {display: 'none'};
            }
            return {backgroundColor: CustomColors(theme).white};
          })(route),
          tabBarLabel: ({focused, color}) => (
            <TabBarLabel
              title={'Members'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'Ionicons'}
              iconName={'newspaper-outline'}
              iconSize={focused ? activeSize : inactiveSize}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        })}
        name="MembersRoot"
        component={MembersRoot}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarStyle: (route => {
            return {backgroundColor: CustomColors(theme).white};
          })(route),
          tabBarLabel: ({focused, color}) => (
            <TabBarLabel
              title={'Explore'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'MaterialIcons'}
              iconName={'explore'}
              iconSize={focused ? activeSize : inactiveSize}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        })}
        name="ExploreRoot"
        component={ExploreRoot}
      />

      <Tab.Screen
        options={({route}) => ({
          tabBarStyle: (route => {
            return {backgroundColor: CustomColors(theme).white};
          })(route),
          tabBarLabel: ({focused, color}) => (
            <TabBarLabel
              title={'Profile'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'Feather'}
              iconName={'users'}
              iconSize={focused ? activeSize : inactiveSize}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        })}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const TabBarLabel = ({
  title,
  focused,
  activeIconColor,
  inactiveIconColor,
}: {
  title: string;
  focused: boolean;
  activeIconColor: string;
  inactiveIconColor: string;
}): JSX.Element => {
  return (
    <CustomText
      color={focused ? activeIconColor : inactiveIconColor}
      style={{fontSize: focused ? 12 : 10}}>
      {title}
    </CustomText>
  );
};

export default TabNav;
