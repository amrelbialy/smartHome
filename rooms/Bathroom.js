import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { Content } from 'native-base';

import { LightCard } from '../components';

import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Bathroom() {
  const [isLightEnabled, setLight] = useState(false);

  // database()
  // .ref('/users/123')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 31,
  // })
  // .then(() => console.log('Data set.'));
  const toggleLightSwitch = () => {
    if (isLightEnabled) {
      send(devices.Light.off.bathroom).then(() => {
        setLight(false);
      });
    } else {
      send(devices.Light.on.bathroom).then(() => {
        setLight(true);
      });
    }
  };

  return (
    <Content padder>
      <LightCard
        label="PANASONIC AC 3 P"
        toggleSwitch={toggleLightSwitch}
        isEnabled={isLightEnabled}
      />
    </Content>
  );
}

Bathroom.navigationOptions = () => ({
  headerTitle: 'Bathroom',
});
