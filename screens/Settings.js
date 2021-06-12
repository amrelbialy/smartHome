import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Slider } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { theme } from '../theme';
import { Block, Text, PanSlider } from '../components';
import rooms from '../rooms';

const Settings = () => (
  <Block flex={1} style={styles.settings}>
    <Text>this is settings</Text>
  </Block>
);

Settings.navigationOptions = () => ({
  headerTitle: 'Settings',
});

Settings.defaultProps = {};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  // slider: {

  // }
});
