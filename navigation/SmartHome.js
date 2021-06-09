import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigatior} from 'react-navigation-tabs'

import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings.js';
import Bedroom from '../rooms/Bedroom'
import LivingRoom from '../rooms/LivingRoom';
import Kitchen from '../rooms/Kitchen';
import Garage from '../rooms/Garage';
import Bathroom from '../rooms/Bathroom';
import Garden from '../rooms/Garden';
import Entrance from '../rooms/Entrance';
import Blutooth from '../components/Blutooth'

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
    Blutooth
    },
  {
    initialRouteName: 'Blutooth',
  } 
);

// const Tabs = createBottomTabNavigatior({
//   Dashboard: SmartHome,
//   Blutooth: Blutooth
// })

export default createAppContainer(SmartHome)
