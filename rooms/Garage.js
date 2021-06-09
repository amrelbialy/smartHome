import React, { useState } from 'react';
// import { ScrollView ,StyleSheet} from 'react-native';
import { Content } from 'native-base';

import {  DoorCard } from '../components';


export default function Garage() {
  const [isDoorEnabled, setDoor] = useState(false);
  
  const toggleDoorSwitch = () => setDoor((previousState) => !previousState);
  
  return (
    <Content padder>
      
      <DoorCard 
      toggleSwitch={toggleDoorSwitch}
      isEnabled = {isDoorEnabled} 
      />

     
    </Content>  
  );
}

Garage.navigationOptions = () => {
  return {
    headerTitle: 'Garage',
  };
};

// const styles = StyleSheet.create({

// });
