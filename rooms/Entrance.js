import React, { useState } from 'react';
// import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import { DoorCard } from '../components';

import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Entrance() {
  const [isDoorEnabled, setDoor] = useState(false);

  const toggleDoorSwitch = () => {
    if (isDoorEnabled) {
      send(devices.Door.off.EntranceMainDoor).then(() => {
        setDoor(false);
      });
    } else {
      send(devices.Door.on.EntranceMainDoor).then(() => {
        setDoor(true);
      });
    }
  };

  return (
    <Content padder>
      <DoorCard label="Door" toggleSwitch={toggleDoorSwitch} isEnabled={isDoorEnabled} />
    </Content>
  );
}

Entrance.navigationOptions = () => ({
  headerTitle: 'Entrance',
});

// const styles = StyleSheet.create({

// });
