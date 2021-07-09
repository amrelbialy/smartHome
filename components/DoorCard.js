import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
const DoorCard = ({ label, toggleSwitch, isEnabled }) => (
  <Card>
    <CardItem header bordered style={styles.doorHeader}>
      <Content contentContainerStyle={styles.contentStyle}>
        <Text style={styles.textStyle}>{label || 'Door'}</Text>
      </Content>
    </CardItem>
    <CardItem header bordered>
      <Body style={styles.bodyStyle}>
        <TouchableOpacity onPress={() => toggleSwitch()}>
          <FontAwesome5
            size={100}
            color={theme.colors.accent}
            name={isEnabled ? 'door-open' : 'door-closed'}
          />
        </TouchableOpacity>
      </Body>
    </CardItem>
  </Card>
);

DoorCard.defaultProps = {};

export default DoorCard;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
  },
  bodyStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
