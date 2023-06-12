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
import ExploreRoot from '../explore/ExploreRoot';
import {Dimensions} from 'react-native';

const Tab = createBottomTabNavigator();
const {height, scale} = Dimensions.get('screen');
function TabNav(): JSX.Element {
  const theme = useSelector(
    (state: AppState) => state.appStateReducer.isDarkMode,
  );

  const activeIconColor = CustomColors(theme).primaryColor;
  const inactiveIconColor = CustomColors(theme).black;
  console.log(scale);
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: CustomColors(theme).white,
          height: height * 0.078,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel
              title={'Feeds'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              iconFamily={'Ionicons'}
              iconName={'newspaper-outline'}
              iconSize={focused ? 28 : 24}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
        name="FeedsRoot"
        component={FeedsRoot}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel
              title={'Members'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              iconFamily={'MaterialCommunityIcons'}
              iconName={'clipboard-list-outline'}
              iconSize={focused ? 28 : 24}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
        name="MembersRoot"
        component={MembersRoot}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel
              title={'Explore'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              iconFamily={'MaterialIcons'}
              iconName={'explore'}
              iconSize={focused ? 28 : 24}
              iconColor={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
        name="ExploreRoot"
        component={ExploreRoot}
      />

      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel
              title={'Profile'}
              focused={focused}
              activeIconColor={activeIconColor}
              inactiveIconColor={inactiveIconColor}
            />
          ),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              iconFamily={'Feather'}
              iconName={'users'}
              iconSize={focused ? 28 : 24}
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
