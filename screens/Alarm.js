import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Slider } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { theme } from '../theme';
import { Block, Text, PanSlider } from '../components';
import rooms from '../rooms';

const Alarm = () => (
  <Block flex={1} style={styles.settings}>
    <Text>this is Alarm</Text>
  </Block>
);

Alarm.navigationOptions = () => ({
  headerTitle: 'Alarm',
});

Alarm.defaultProps = {};

export default Alarm;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  // slider: {

  // }
});
