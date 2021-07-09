import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
const LightCard = ({ toggleSwitch, isEnabled }) => (
  <Card>
    <CardItem header bordered style={styles.lightHeader}>
      <Content contentContainerStyle={styles.contentStyle}>
        <Text style={styles.textStyle}>Lights</Text>
      </Content>
    </CardItem>
    <CardItem bordered>
      <Body style={styles.bodyStyle}>
        <TouchableOpacity onPress={() => toggleSwitch()}>
          <MaterialCommunityIcons
            size={100}
            color={theme.colors.accent}
            name={isEnabled ? 'lightbulb' : 'lightbulb-outline'}
          />
        </TouchableOpacity>
      </Body>
    </CardItem>
  </Card>
);

LightCard.defaultProps = {};

export default LightCard;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lightHeader: {
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
