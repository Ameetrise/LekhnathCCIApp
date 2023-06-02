/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FeedsRoot from '../feeds/FeedsRoot';
import MembersRoot from '../members/MembersRoot';
import VectorIcon from '../../components/VectorIcons';
import React from 'react';
import Explore from '../explore/Explore';
import Profile from '../user/Profile';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux/store';
import CustomColors from '../../config/CustomColors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import CustomText from '../../components/views/CustomText';

const Tab = createBottomTabNavigator();

function TabNav(): JSX.Element {
  const user = useSelector((state: AppState) => state.userReducer);
  console.log(user.name);
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  const IconColor = CustomColors(theme).black;

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {backgroundColor: CustomColors(theme).primaryColor},
        tabBarActiveTintColor: CustomColors(theme).black,
        tabBarInactiveTintColor: CustomColors(theme).whiteShade3,
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <CustomText
              color={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
              style={{fontSize: focused ? 12 : 10}}>
              Feeds
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'Ionicons'}
              iconName={'newspaper-outline'}
              iconSize={focused ? 28 : 18}
              iconColor={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
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
              color={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
              style={{fontSize: focused ? 12 : 10}}>
              Members
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'MaterialCommunityIcons'}
              iconName={'clipboard-list-outline'}
              iconSize={focused ? 28 : 18}
              iconColor={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
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
              color={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
              style={{fontSize: focused ? 12 : 10}}>
              Explore
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'MaterialIcons'}
              iconName={'explore'}
              iconSize={focused ? 28 : 18}
              iconColor={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
            />
          ),
        }}
        name="Explore"
        component={Explore}
      />

      <Tab.Screen
        options={{
          tabBarLabel: ({focused, color}) => (
            <CustomText
              color={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
              style={{fontSize: focused ? 12 : 10}}>
              Profile
            </CustomText>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <VectorIcon
              iconFamily={'Feather'}
              iconName={'users'}
              iconSize={focused ? 28 : 18}
              iconColor={
                focused
                  ? CustomColors(theme).allWhite
                  : CustomColors(theme).whiteShade2
              }
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
