/* eslint-disable react/display-name */
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { theme } from './theme';

export default {
  'bedroom': {
    name: 'Bedroom',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="bed"
        {...props}
      />
    ),
  },
  'garage': {
    name: 'Garage',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="garage-variant"
        {...props}
      />
    ),
  },
  'garden': {
    name: 'Garden',
    icon: ({size, color, ...props}) => (
      <Entypo
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="flower"
        {...props}
      />
    ),
  },
  'kitchen': {
    name: 'Kitchen',
    icon: ({size, color, ...props}) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="kitchen"
        {...props}
      />
    ),
  },
  'livingRoom': {
    name: 'Living Room',
    icon: ({size, color, ...props}) => (
      <Entypo
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="tv"
        {...props}
      />
    ),
  },
  'bathroom': {
    name: 'Bathroom',
    icon: ({size, color, ...props}) => (
      <FontAwesome
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="bath"
        {...props}
      />
    ),
    light:{
      on:'b',
      off:'B'
    }
  },

  'entrance': {
    name: 'Entrance',
    icon: ({size, color, ...props}) => (
      <FontAwesome5
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="door-open"
        {...props}
      />
    ),
  },
};