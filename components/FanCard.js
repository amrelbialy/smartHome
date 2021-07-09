import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
const FanCard = ({ toggleSwitch, isEnabled }) => (
  <Card>
    <CardItem header bordered style={styles.FanHeader}>
      <Content contentContainerStyle={styles.contentStyle}>
        <Text style={styles.textStyle}>Fan</Text>
      </Content>
    </CardItem>
    <CardItem header bordered style={styles.doorHeader}>
      <Body style={styles.bodyStyle}>
        <TouchableOpacity onPress={() => toggleSwitch()}>
          <MaterialCommunityIcons
            size={100}
            color={theme.colors.accent}
            name={isEnabled ? 'fan' : 'fan-off'}
          />
        </TouchableOpacity>
      </Body>
    </CardItem>
  </Card>
);

FanCard.defaultProps = {};

export default FanCard;

const styles = StyleSheet.create({
  FanHeader: {
    flex: 1,
    justifyContent: 'space-between',
  },
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
