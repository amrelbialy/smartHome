import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings.js';
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
    Blutooth,
  },
  {
    initialRouteName: 'Blutooth',
  }
);

const Tabs = createBottomTabNavigator({
  Dashboard: SmartHome,
  Blutooth,
});

export default createAppContainer(SmartHome);
