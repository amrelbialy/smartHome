import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import database from '@react-native-firebase/database';

import Block from './Block';
import Text from './Text';
import { theme } from '../theme';

const IotCard = () => {
  const [currentView, setCurrentView] = useState(0);
  const iotValuesOne = [
    {
      label: 'Temprature',
      value: '34',
      subLabel: '°C',
    },
    {
      label: 'Humidity',
      value: '40',
      // subLabel: '%rh',
    },
    {
      label: 'PH meter',
      value: '4',
      subLabel: 'pH',
    },
  ];

  const iotValuesTwo = [
    {
      label: 'Active',
      value: '10',
    },
    {
      label: 'Inactive',
      value: '8',
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

  useEffect(() => {
    const getValue = database().ref('ultrasonic_value');
    getValue.on('value', (snapshot) => {
      const value = snapshot.val();
      console.log(value);
      if (value) {
        console.log(value);
      }
    });
  }, []);
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
