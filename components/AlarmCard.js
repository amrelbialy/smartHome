import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
const AlarmCard = ({ toggleSwitch, isEnabled }) => (
  <Card>
    <CardItem header bordered style={styles.alarmHeader}>
      <Content contentContainerStyle={styles.contentStyle}>
        <Text style={styles.textStyle}>Alarm</Text>
      </Content>
    </CardItem>
    <CardItem bordered>
      <Body style={styles.bodyStyle}>
        <TouchableOpacity onPress={() => toggleSwitch()}>
          <Ionicons
            size={100}
            color={theme.colors.accent}
            name={isEnabled ? 'alarm' : 'alarm-outline'}
          />
        </TouchableOpacity>
      </Body>
    </CardItem>
  </Card>
);

AlarmCard.defaultProps = {};

export default AlarmCard;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alarmHeader: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
  },
  bodyStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
