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
import {CustomColors} from '../../config/CustomColors';

const Tab = createMaterialBottomTabNavigator();

function TabNav(): JSX.Element {
  const user = useSelector((state: AppState) => state.userReducer);
  console.log(user.name);

  return (
    <Tab.Navigator shifting labeled>
      <Tab.Screen
        options={{
          tabBarLabel: 'Feeds',
          tabBarIcon: ({}) => (
            <VectorIcon
              iconFamily={'Ionicons'}
              iconName={'newspaper-outline'}
              iconSize={24}
              iconColor={CustomColors.accentColor}
            />
          ),
        }}
        name="FeedsRoot"
        component={FeedsRoot}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({color}) => (
            <VectorIcon
              iconFamily={'MaterialCommunityIcons'}
              iconName={'clipboard-list-outline'}
              iconSize={24}
              iconColor={CustomColors.accentColor}
            />
          ),
        }}
        name="MembersRoot"
        component={MembersRoot}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <VectorIcon
              iconFamily={'MaterialIcons'}
              iconName={'explore'}
              iconSize={24}
              iconColor={CustomColors.accentColor}
            />
          ),
        }}
        name="Explore"
        component={Explore}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <VectorIcon
              iconFamily={'Feather'}
              iconName={'users'}
              iconSize={24}
              iconColor={CustomColors.accentColor}
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
