import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '../theme';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import Alarm from '../screens/Alarm';
import Bedroom from '../rooms/Bedroom';
import LivingRoom from '../rooms/LivingRoom';
import Kitchen from '../rooms/Kitchen';
import Garage from '../rooms/Garage';
import Bathroom from '../rooms/Bathroom';
import Garden from '../rooms/Garden';
import Entrance from '../rooms/Entrance';
import BlutoothOld from '../components/BlutoothOld';
import Blutooth from '../screens/Blutooth';

const SmartHome = createStackNavigator(
  {
    // Login,
    Dashboard,
    Bedroom,
    Garage,
    Garden,
    Kitchen,
    LivingRoom,
    Bathroom,
    Entrance,
    Settings,
  },
  {
    initialRouteName: 'Dashboard',
  }
);

const bluetoothNavigator = createStackNavigator(
  {
    Blutooth,
  },
  {
    initialRouteName: 'Blutooth',
  }
);
const alarmNavigator = createStackNavigator(
  {
    Alarm,
  },
  {
    initialRouteName: 'Alarm',
  }
);
const settingsNavigator = createStackNavigator(
  {
    Settings,
  },
  {
    initialRouteName: 'Settings',
  }
);
const Tabs = createBottomTabNavigator(
  {
    Dashboard: {
      screen: SmartHome,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <MaterialCommunityIcons size={20} color={tabInfo.tintColor} name="view-dashboard" />
        ),
      },
    },
    Blutooth: {
      screen: bluetoothNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <MaterialCommunityIcons size={20} color={tabInfo.tintColor} name="bluetooth" />
        ),
      },
    },
    Alarm: {
      screen: alarmNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <MaterialCommunityIcons size={20} color={tabInfo.tintColor} name="alarm" />
        ),
      },
    },
    Settings: {
      screen: settingsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <MaterialIcons size={20} color={tabInfo.tintColor} name="settings" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: theme.colors.accent,
    },
  }
);

export default createAppContainer(Tabs);
