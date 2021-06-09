import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { Content } from 'native-base';

import { LightCard} from '../components';


export default function Bathroom() {
  const [isLightEnabled, setLight] = useState(false);
  
  const toggleLightSwitch = () => setLight((previousState) => !previousState);
  

  return (
    <Content padder>
      
      <LightCard 
      label="PANASONIC AC 3 P" 
      toggleSwitch={toggleLightSwitch}
      isEnabled = {isLightEnabled} 
      />
    </Content>
  );
}

Bathroom.navigationOptions = () => {
  return {
    headerTitle: 'Bathroom',
  };
};

// const styles = StyleSheet.create({

// });
