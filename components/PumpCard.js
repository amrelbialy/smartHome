import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
const PumpCard = ({ toggleSwitch, isEnabled }) => (
  <Card>
    <CardItem header bordered style={styles.pumpHeader}>
      <Content contentContainerStyle={styles.contentStyle}>
        <Text style={styles.textStyle}>Pump</Text>
      </Content>
    </CardItem>
    <CardItem bordered>
      <Body style={styles.bodyStyle}>
        <TouchableOpacity onPress={() => toggleSwitch()}>
          <MaterialCommunityIcons
            size={100}
            color={theme.colors.accent}
            name={isEnabled ? 'water-pump' : 'water-pump-off'}
          />
        </TouchableOpacity>
      </Body>
    </CardItem>
  </Card>
);

PumpCard.defaultProps = {};

export default PumpCard;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    marginLeft: 4,
  },
  pumpHeader: {
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
