import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import { Content } from 'native-base';

import { LightCard, CurtainCard ,FanCard } from '../components';


export default function LivingRoom() {
  const [isLightEnabled, setLight] = useState(false);
  const [isFanEnabled, setFan] = useState(false);
  const [isCurtainEnabled, setCurtain] = useState(false);
  const [direction, setDirection] = useState(20);

  const toggleLightSwitch = () => setLight((previousState) => !previousState);
  const toggleFanSwitch = () => setFan((previousState) => !previousState);
  const toggleCurtainSwitch = () => setCurtain((previousState) => !previousState);

  return (
    <Content padder>
      
      <LightCard 
      label="PANASONIC AC 3 P" 
      toggleSwitch={toggleLightSwitch}
      isEnabled = {isLightEnabled} 
      />

      <FanCard 
      label="PANASONIC AC 3 P" 
      toggleSwitch={toggleFanSwitch}
      isEnabled = {isFanEnabled} 
      />
      
      <CurtainCard
        toggleSwitch={toggleCurtainSwitch}
        isEnabled = {isCurtainEnabled}
        direction={direction}
        handleDirection={(value) => setDirection(Math.floor(value, 10))}
      />
     
    </Content>
  );
}

LivingRoom.navigationOptions = () => {
  return {
    headerTitle: 'Living Room',
  };
};

// const styles = StyleSheet.create({

// });
