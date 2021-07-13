import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { Content } from 'native-base';

import { LightCard, CurtainCard, FanCard } from '../components';

import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function LivingRoom() {
  const [isLightEnabled, setLight] = useState(false);
  const [isFanEnabled, setFan] = useState(false);
  const [isCurtainEnabled, setCurtain] = useState(false);

  const toggleLightSwitch = () => {
    if (isLightEnabled) {
      send(devices.Light.off.livingRoom).then(() => {
        setLight(false);
      });
    } else {
      send(devices.Light.on.livingRoom).then(() => {
        setLight(true);
      });
    }
  };

  const toggleFanSwitch = () => {
    if (isFanEnabled) {
      send(devices.Fan.off).then(() => {
        setFan(false);
      });
    } else {
      send(devices.Fan.on).then(() => {
        setFan(true);
      });
    }
  };

  const toggleCurtainSwitch = () => {
    if (isCurtainEnabled) {
      send(devices.curtains.off.livingRoom).then(() => {
        setCurtain(false);
      });
    } else {
      send(devices.curtains.on.livingRoom).then(() => {
        setCurtain(true);
      });
    }
  };

  return (
    <Content padder>
      <LightCard toggleSwitch={toggleLightSwitch} isEnabled={isLightEnabled} />

      <FanCard toggleSwitch={toggleFanSwitch} isEnabled={isFanEnabled} />

      <CurtainCard toggleSwitch={toggleCurtainSwitch} isEnabled={isCurtainEnabled} />
    </Content>
  );
}

LivingRoom.navigationOptions = () => ({
  headerTitle: 'Living Room',
});

// const styles = StyleSheet.create({

// });
