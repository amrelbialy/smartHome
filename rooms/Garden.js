import React, { useState } from 'react';
// import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import { PumpCard } from '../components';


export default function Garden() {
  const [isPumpEnabled, setPump] = useState(false);
  
  const togglePumpSwitch = () => setPump((previousState) => !previousState);
  
  return (
    <Content padder>
      
      <PumpCard 
      toggleSwitch={togglePumpSwitch}
      isEnabled = {isPumpEnabled} 
      />
    </Content>  
  );
}

Garden.navigationOptions = () => {
  return {
    headerTitle: 'Garden',
  };
};

// const styles = StyleSheet.create({

// });
