import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import database from '@react-native-firebase/database';

import Block from './Block';
import Text from './Text';
import { theme } from '../theme';

const IotCard = () => {
  const [currentView, setCurrentView] = useState(0);
  const [activeSensors, setActiveSensors] = useState(0);
  const [inActiveSensors, setInActiveSensors] = useState(0);
  // 8 values for checking active values
  const [bathroomLed, setBathroomLed] = useState(false);
  const [bedroomLed, setBedroomLed] = useState(false);
  const [earthquakeAlarm, setEarthquakeAlarm] = useState(false);
  const [fanTrigger, setFanTrigger] = useState(false);
  const [pumpTrigger, setPumpTrigger] = useState(false);
  const [fienceAlarm, setFienceAlarm] = useState(false);
  const [fireAlarm, setFireAlarm] = useState(false);
  const [kitchenLed, setKitchenLed] = useState(false);
  const [livingRoomLed, setLivingRoomLed] = useState(false);
  const [pHValue, setPHValue] = useState(0);
  const [tempValue, setTempValue] = useState(0);
  const [humidityValue, setHumidityValue] = useState(0);

  const getDatabaseValues = (key, setState) => {
    const getValue = database().ref(key);
    getValue.on('value', (snapshot) => {
      const value = snapshot.val();
      console.log('first', key, value);
      if (value) {
        console.log('second', key, value);
        setState(value);
      }
    });
  };

  useEffect(() => {
    getDatabaseValues('BathroomLed_Trigger_Str', setBathroomLed);
    getDatabaseValues('BedroomLed_Trigger_Str', setBedroomLed);
    getDatabaseValues('EarthaquackAlarm_Trigger_Str', setEarthquakeAlarm);
    getDatabaseValues('Fan_Trigger_Str', setFanTrigger);
    getDatabaseValues('Pump_Trigger_Str', setPumpTrigger);
    getDatabaseValues('FienceAlarm_Trigger_Str', setFienceAlarm);
    getDatabaseValues('FireAlarm_Trigger_Str', setFireAlarm);
    getDatabaseValues('KitchenLed_Trigger_Str', setKitchenLed);
    getDatabaseValues('LivingroomLed_Trigger_Str', setLivingRoomLed);
    getDatabaseValues('PH_Reading_Str', setPHValue);
    getDatabaseValues('Sensor_Read_Temp_Str', setTempValue);
    getDatabaseValues('Sensor_Humidity_Str', setHumidityValue);
  }, []);
  const iotValuesOne = [
    {
      label: 'Temprature',
      value: tempValue || 0,
      subLabel: '°C',
    },
    {
      label: 'Humidity',
      value: humidityValue || 0,
      // subLabel: '%rh',
    },
    {
      label: 'PH meter',
      value: pHValue || 0,
      subLabel: 'pH',
    },
  ];

  const sensorArr = [
    bathroomLed,
    bedroomLed,
    earthquakeAlarm,
    fanTrigger,
    pumpTrigger,
    fienceAlarm,
    fireAlarm,
    kitchenLed,
    livingRoomLed,
  ];

  // eslint-disable-next-line array-callback-return
  sensorArr.map((item) => {
    if (item) {
      setActiveSensors(activeSensors + 1);
    } else {
      setInActiveSensors(inActiveSensors + 1);
    }
  });

  const iotValuesTwo = [
    {
      label: 'Active',
      value: activeSensors || 0,
    },
    {
      label: 'Inactive',
      value: inActiveSensors || 0,
    },
    {
      label: 'Avg Temprature',
      value: '30',
    },
    {
      label: 'Avg Humidity',
      value: '4',
    },
    {
      label: 'Avg PH',
      value: '4',
    },
  ];
  const changeView = () => {
    if (currentView === 2) {
      setCurrentView(0);
    } else {
      setCurrentView(currentView + 1);
    }
  };
  return (
    <Card style={styles.main}>
      <CardItem>
        <TouchableOpacity onPress={() => changeView()}>
          <View style={styles.sensorValue}>
            <Block flex={1.5} row style={{ alignItems: 'flex-end' }}>
              <Text h1>{iotValuesOne[currentView].value}</Text>
              <Text h1 size={30} height={70} weight="600" spacing={0.1}>
                {iotValuesOne[currentView].subLabel}
              </Text>
            </Block>
            <Text caption>{iotValuesOne[currentView].label}</Text>
          </View>
        </TouchableOpacity>

        <Body>
          {iotValuesTwo.map((item) => (
            <View style={styles.list}>
              <View style={styles.listBody}>
                <Text style={styles.listText}>{item.label}</Text>
                <Text style={styles.listValue}>{item.value}</Text>
              </View>
            </View>
          ))}
        </Body>
      </CardItem>
    </Card>
  );
};

IotCard.defaultProps = {};

export default IotCard;

const styles = StyleSheet.create({
  main: {
    height: 200,
  },
  contentStyle: {
    backgroundColor: 'white',
  },
  list: {
    width: '100%',
    paddingBottom: 5,
    marginBottom: 10,
    borderColor: '#e8e8e8',
    borderBottomWidth: 1,
  },

  listBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listText: {
    color: '#e8e8e8',
  },
  listValue: {
    color: theme.colors.accent,
  },
  sensorValue: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 120,
    marginRight: 5,
  },

  sensorValueBody: {
    fontSize: 90,
  },

  lightHeader: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
