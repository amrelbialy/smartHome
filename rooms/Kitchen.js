import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { Content } from 'native-base';

import { LightCard } from '../components';

import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Kitchen() {
  const [isLightEnabled, setLight] = useState(false);

  const toggleLightSwitch = () => {
    if (isLightEnabled) {
      send(devices.Light.off.Kitchen).then(() => {
        setLight(false);
      });
    } else {
      send(devices.Light.on.Kitchen).then(() => {
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

Kitchen.navigationOptions = () => ({
  headerTitle: 'Kitchen',
});

// const styles = StyleSheet.create({

// });
