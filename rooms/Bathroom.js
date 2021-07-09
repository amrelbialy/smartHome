import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { Content } from 'native-base';

import { LightCard } from '../components';

import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Bathroom() {
  const [isLightEnabled, setLight] = useState(false);

  const toggleLightSwitch = () => {
    if (isLightEnabled) {
      send(devices.Light.off.bedroom).then(() => {
        setLight(false);
      });
    } else {
      send(devices.Light.on.bedroom).then(() => {
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

// const styles = StyleSheet.create({

// });
