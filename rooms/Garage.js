import React, { useState } from 'react';
// import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import { DoorCard } from '../components';
import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Garage() {
  const [isDoorEnabled, setDoor] = useState(false);

  const toggleDoorSwitch = () => {
    if (isDoorEnabled) {
      send(devices.Door.off.Garage).then(() => {
        setDoor(false);
      });
    } else {
      send(devices.Door.on.Garage).then(() => {
        setDoor(true);
      });
    }
  };

  return (
    <Content padder>
      <DoorCard toggleSwitch={toggleDoorSwitch} isEnabled={isDoorEnabled} />
    </Content>
  );
}

Garage.navigationOptions = () => ({
  headerTitle: 'Garage',
});

// const styles = StyleSheet.create({

// });
