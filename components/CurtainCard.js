import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
const CurtainCard = ({ toggleSwitch, isEnabled }) => (
  <Card>
    <CardItem header bordered style={styles.lightHeader}>
      <Content contentContainerStyle={styles.contentStyle}>
        <Text style={styles.textStyle}>Curtains</Text>
      </Content>
    </CardItem>

    <CardItem bordered>
      <Body style={styles.bodyStyle}>
        <TouchableOpacity onPress={() => toggleSwitch()}>
          <MaterialCommunityIcons
            size={100}
            color={theme.colors.accent}
            name={isEnabled ? 'blinds' : 'blinds-open'}
          />
        </TouchableOpacity>
      </Body>
    </CardItem>
  </Card>
);

CurtainCard.defaultProps = {};

export default CurtainCard;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
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
