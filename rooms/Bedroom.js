import React, { useState } from 'react';
import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import { LightCard, CurtainCard , DoorCard } from '../components';

import {theme} from '../theme';
import {send} from '../services/ButoothService'
import devices from '../utils/devices'

export default function Bedroom() {
  const [isLightEnabled, setLight] = useState(false);
  const [isDoorEnabled, setDoor] = useState(false);
  const [isCurtainEnabled, setCurtain] = useState(false);
  const [direction, setDirection] = useState(20);
  
  const toggleLightSwitch = () => {
    if(isDoorEnabled){
      send(devices.Light.off.bedroom)
      .then(()=>{
        setLight(false);
      })
    } else {
     send(devices.Light.on.bedroom)
     .then(()=>{
      setLight(true);
     })
    }
  } 
  const toggleDoorSwitch = () =>{
     if(isDoorEnabled){
       send(devices.Door.off.bedroom)
       .then(()=>{
        setDoor(false);
       })
     } else {
      send(devices.Door.on.bedroom)
      .then(()=>{
        setDoor(true);
      })
     }
    
} 
  const toggleCurtainSwitch = () => setCurtain((previousState) => !previousState);

  return (
    <ScrollView contentContainerStyle={styles.mainStyles} showsVerticalScrollIndicator={false}>
      
      <Content padder>
      
      <DoorCard 
      toggleSwitch={toggleDoorSwitch}
      isEnabled = {isDoorEnabled} 
      />

      <LightCard 
      label="PANASONIC AC 3 P" 
      toggleSwitch={toggleLightSwitch}
      isEnabled = {isLightEnabled} 
      />
 
      <CurtainCard
        toggleSwitch={toggleCurtainSwitch}
        isEnabled = {isCurtainEnabled}
        direction={direction}
        handleDirection={(value) => setDirection(Math.floor(value, 10))}
      />
     
    </Content>  
    </ScrollView>

  );
}

Bedroom.navigationOptions = () => {
  return {
    headerTitle: 'Bedroom',
  };
};

const styles = StyleSheet.create({
  mainStyles: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
});
