import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, CardItem} from 'native-base';

const DashboardCard = ({onPress,children})=> {
   return (
      <Card style={styles.card}>
        <CardItem
          header
          button
          onPress={() => onPress()}>
          <View style={styles.contentCard}>
            {children}
          </View>
        </CardItem>
      </Card>
    );

}



DashboardCard.defaultProps = {
  
};

export default DashboardCard;

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 180,
    // padding:3,
    borderRadius: 4,
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
  },
  contentCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.colors.button,
  },
});