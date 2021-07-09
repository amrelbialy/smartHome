import React, { useState } from 'react';
// import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import { DoorCard } from '../components';

import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Entrance() {
  const [isMainDoorEnabled, setMainDoor] = useState(false);
  const [isSecondDoorEnabled, setSecondDoor] = useState(false);

  const toggleMainDoorSwitch = () => {
    if (isMainDoorEnabled) {
      send(devices.Door.off.EntranceMainDoor).then(() => {
        setMainDoor(false);
      });
    } else {
      send(devices.Door.on.EntranceMainDoor).then(() => {
        setMainDoor(true);
      });
    }
  };
  const toggleSecondDoorSwitch = () => {
    if (isSecondDoorEnabled) {
      send(devices.Door.off.EntranceSecondDoor).then(() => {
        setSecondDoor(false);
      });
    } else {
      send(devices.Door.on.EntranceSecondDoor).then(() => {
        setSecondDoor(true);
      });
    }
  };

  return (
    <Content padder>
      <DoorCard
        label="Main Door"
        toggleSwitch={toggleMainDoorSwitch}
        isEnabled={isMainDoorEnabled}
      />

      <DoorCard
        label="Second Door"
        toggleSwitch={toggleSecondDoorSwitch}
        isEnabled={isSecondDoorEnabled}
      />
    </Content>
  );
}

Entrance.navigationOptions = () => ({
  headerTitle: 'Entrance',
});

// const styles = StyleSheet.create({

// });
