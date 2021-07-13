import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem } from 'native-base';

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ onPress, children }) => (
  <Card style={styles.card}>
    <CardItem header button onPress={() => onPress()} style={styles.CardItem}>
      <View style={styles.contentCard}>{children}</View>
    </CardItem>
  </Card>
);

DashboardCard.defaultProps = {};

export default DashboardCard;

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 180,

    borderRadius: 4,
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECEDEF',
  },
  CardItem: {
    backgroundColor: '#ECEDEF',
  },
  contentCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
