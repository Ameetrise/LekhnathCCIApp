/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
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
import ExploreRoot from '../explore/ExploreRoot';

const Tab = createBottomTabNavigator();

function TabNav(): JSX.Element {
  const user = useSelector((state: AppState) => state.userReducer);
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  const activeIconColor = CustomColors(theme).primaryColor;
  const inactiveIconColor = CustomColors(theme).black;

  return (
    <Tab.Navigator
      initialRouteName="FeedsRoot"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: CustomColors(theme).white,
          height: s(52),
        },
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <CustomText
              color={focused ? activeIconColor : inactiveIconColor}
              style={{fontSize: focused ? 12 : 10}}>
              Feeds
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'Ionicons'}
              iconName={'newspaper-outline'}
              iconSize={focused ? 28 : 18}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
        name="FeedsRoot"
        component={FeedsRoot}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <CustomText
              color={focused ? activeIconColor : inactiveIconColor}
              style={{fontSize: focused ? 12 : 10}}>
              Members
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'MaterialCommunityIcons'}
              iconName={'clipboard-list-outline'}
              iconSize={focused ? 28 : 18}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
        name="MembersRoot"
        component={MembersRoot}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <CustomText
              color={focused ? activeIconColor : inactiveIconColor}
              style={{fontSize: focused ? 12 : 10}}>
              Explore
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'MaterialIcons'}
              iconName={'explore'}
              iconSize={focused ? 28 : 18}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
        name="ExploreRoot"
        component={ExploreRoot}
      />

      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <CustomText
              color={focused ? activeIconColor : inactiveIconColor}
              style={{fontSize: focused ? 12 : 10}}>
              Profile
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'Feather'}
              iconName={'users'}
              iconSize={focused ? 28 : 18}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
