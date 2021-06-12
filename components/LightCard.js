import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Body, Switch } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../theme';

const LightCard = ({ label, toggleSwitch, isEnabled, ...props }) => (
  <Card>
    <CardItem header bordered style={styles.lightHeader}>
      <Content contentContainerStyle={styles.contentStyle}>
        <MaterialCommunityIcons size={20} color={theme.colors.accent} name="lightbulb" {...props} />
        <Text>Lights</Text>
      </Content>
      <Switch
        trackColor={{ false: '#767577', true: `${theme.colors.accent}` }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </CardItem>
    <CardItem bordered>
      <Body>
        <Text>{label}</Text>
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
    justifyContent: 'flex-start',
  },
  lightHeader: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
