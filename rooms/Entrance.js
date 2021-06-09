import React, { useState } from 'react';
// import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import {  DoorCard } from '../components';


export default function Entrance() {
  const [isMainDoorEnabled, setMainDoor] = useState(false);
  const [isSecondDoorEnabled, setSecondDoor] = useState(false);

  const toggleMainDoorSwitch = () => setMainDoor((previousState) => !previousState);
  const toggleSecondDoorSwitch = () => setSecondDoor((previousState) => !previousState);

  return (
    <Content padder>
      
      <DoorCard 
      label="Main Door"
      toggleSwitch={toggleMainDoorSwitch}
      isEnabled = {isMainDoorEnabled} 
      />

     <DoorCard 
      label="Second Door"
      toggleSwitch={toggleSecondDoorSwitch}
      isEnabled = {isSecondDoorEnabled} 
      />

     
    </Content>  
  );
}

Entrance.navigationOptions = () => {
  return {
    headerTitle: 'Entrance',
  };
};

// const styles = StyleSheet.create({

// });
