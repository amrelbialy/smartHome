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
  const [direction, setDirection] = useState(20);

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
      send(devices.curtains.off.bedroom).then(() => {
        setCurtain(false);
      });
    } else {
      send(devices.curtains.on.bedroom).then(() => {
        setCurtain(true);
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

      <FanCard label="PANASONIC AC 3 P" toggleSwitch={toggleFanSwitch} isEnabled={isFanEnabled} />

      <CurtainCard toggleSwitch={toggleCurtainSwitch} isEnabled={isCurtainEnabled} />
    </Content>
  );
}

LivingRoom.navigationOptions = () => ({
  headerTitle: 'Living Room',
});

// const styles = StyleSheet.create({

// });
