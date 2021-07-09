import React, { useState } from 'react';
// import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import { PumpCard } from '../components';
import { send } from '../services/ButoothService';
import devices from '../utils/devices';

export default function Garden() {
  const [isPumpEnabled, setPump] = useState(false);

  const togglePumpSwitch = () => {
    if (isPumpEnabled) {
      send(devices.Pump.off).then(() => {
        setPump(false);
      });
    } else {
      send(devices.Pump.on).then(() => {
        setPump(true);
      });
    }
  };

  return (
    <Content padder>
      <PumpCard toggleSwitch={togglePumpSwitch} isEnabled={isPumpEnabled} />
    </Content>
  );
}

Garden.navigationOptions = () => ({
  headerTitle: 'Garden',
});

// const styles = StyleSheet.create({

// });
