/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import {Text} from 'native-base';
// import { LineChart, Path } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';

import {theme} from '../theme';
import { Block ,DashboardCard} from '../components';
import rooms from '../rooms';

class Dashboard extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    const { navigation } = this.props;
    const BedroomIcon = rooms['bedroom'].icon;
    const GarageIcon = rooms['garage'].icon;
    const GardenIcon = rooms['garden'].icon;
    const KitchenIcon = rooms['kitchen'].icon;
    const LivingRoomIcon = rooms['livingRoom'].icon;
    const BathroomIcon = rooms['bathroom'].icon;
    const EntranceIcon = rooms['entrance'].icon;

    const renderFirstRow = () => (
      <Block
      row
      space="around"
      >
      <DashboardCard onPress={() => navigation.navigate('Bedroom')}>
         <BedroomIcon size={100} />
          <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
              {rooms['bedroom'].name}
          </Text>
       </DashboardCard>

    
        <DashboardCard  onPress={() => navigation.navigate('Garage')}>
           <GarageIcon size={100} />
            <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
              {rooms['garage'].name}
            </Text>
       </DashboardCard>
    </Block>
    )

    const renderSecondRow = ()=> (
      <Block
      row
      space="around"
      >
        <DashboardCard   onPress={() => navigation.navigate('Garden')}>
           <GardenIcon size={100} />
            <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
              {rooms['garden'].name}
            </Text>
       </DashboardCard>
      
       <DashboardCard   onPress={() => navigation.navigate('Kitchen')}>
       <KitchenIcon size={100} />
            <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
              {rooms['kitchen'].name}
            </Text>
       </DashboardCard>
    
    </Block>
    )

    const renderThirdRow = () => (
      <Block
      row
      space="around"
      >
         <DashboardCard   onPress={() => navigation.navigate('LivingRoom')}>
         <LivingRoomIcon size={100} />
            <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
              {rooms['livingRoom'].name}
            </Text>
       </DashboardCard>

       <DashboardCard   onPress={() => navigation.navigate('Bathroom')}>
         <BathroomIcon size={100} />
            <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
              {rooms['bathroom'].name}
            </Text>
       </DashboardCard>
    </Block>
    )

    const renderFourthRow = () => (
      <Block
      row
      space="around"
      >
         <DashboardCard   onPress={() => navigation.navigate('Entrance')}>
         <EntranceIcon size={100} />
            <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
              {rooms['entrance'].name}
            </Text>
       </DashboardCard>

    </Block>
    )
    return (
      <Block style={styles.dashboard}>
     
        <ScrollView
          contentContainerStyle={styles.mainStyles}
          showsVerticalScrollIndicator={false}>
          <Block column space="between">
            {renderFirstRow()}
            {renderSecondRow()}
            {renderThirdRow()}
            {renderFourthRow()}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Dashboard.navigationOptions = () => {
  return {
    headerTitle: 'All Rooms',
  };
};

Dashboard.defaultProps = {
  
};

export default Dashboard;

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  dashboard: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
    padding: 0,
  },
  mainStyles: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
  

});