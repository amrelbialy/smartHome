import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Content } from 'native-base';

import { LightCard, CurtainCard, DoorCard } from '../components';

import { theme } from '../theme';
import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Bedroom() {
  const [isLightEnabled, setLight] = useState(false);
  const [isDoorEnabled, setDoor] = useState(false);
  const [isCurtainEnabled, setCurtain] = useState(false);

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

  const toggleDoorSwitch = () => {
    if (isDoorEnabled) {
      send(devices.Door.off.bedroom).then(() => {
        setDoor(false);
      });
    } else {
      send(devices.Door.on.bedroom).then(() => {
        setDoor(true);
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
    <ScrollView contentContainerStyle={styles.mainStyles} showsVerticalScrollIndicator={false}>
      <Content padder>
        <DoorCard toggleSwitch={toggleDoorSwitch} isEnabled={isDoorEnabled} />

        <LightCard toggleSwitch={toggleLightSwitch} isEnabled={isLightEnabled} />

        <CurtainCard toggleSwitch={toggleCurtainSwitch} isEnabled={isCurtainEnabled} />
      </Content>
    </ScrollView>
  );
}

Bedroom.navigationOptions = () => ({
  headerTitle: 'Bedroom',
});

const styles = StyleSheet.create({
  mainStyles: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
});
