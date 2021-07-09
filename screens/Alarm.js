import React from 'react';
import { StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux';
import { theme } from '../theme';
import { Block, Text } from '../components';

import Button from '../components/Button';

const Alarm = () => {
  const handleAlarm = () => {
    console.log('alarmoff');
  };

  return (
    <Block flex={1} style={styles.settings}>
      <Button mode="contained" onPress={() => handleAlarm()}>
        <Text style={{ color: 'white' }}>Alarm Off</Text>
      </Button>
    </Block>
  );
};

Alarm.navigationOptions = () => ({
  headerTitle: 'Alarm',
});

export default Alarm;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
});
