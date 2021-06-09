import React from 'react';
import { View,Text, StyleSheet} from 'react-native';
import { Content, Card, CardItem, Body, Switch } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../theme';

const FanCard = ({label,toggleSwitch,isEnabled,...props})=> {
  return (
    <Card>
    <CardItem header bordered style={styles.FanHeader}>
      <Content
        contentContainerStyle={styles.contentStyle}>
        <MaterialCommunityIcons
          size={20}
          color={theme.colors.accent}
          name="fan"
          {...props}
        />
        <Text style={styles.label}>Fan</Text>
      </Content>
      <Switch
        trackColor={{ false: '#767577', true: `${theme.colors.accent}` }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </CardItem>
  
  </Card>
    );

}



FanCard.defaultProps = {
   
};

export default FanCard;

const styles = StyleSheet.create({
  FanHeader: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentStyle : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  label: {
    marginLeft:4,
},
});