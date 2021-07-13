/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { theme } from '../theme';
import { Block, DashboardCard, IotCard, Text } from '../components';
import rooms from '../rooms';

const Dashboard = (props) => {
  const { navigation } = props;
  const email = useSelector((state) => state.auth.email);
  const BedroomIcon = rooms.bedroom.icon;
  const GarageIcon = rooms.garage.icon;
  const GardenIcon = rooms.garden.icon;
  const KitchenIcon = rooms.kitchen.icon;
  const LivingRoomIcon = rooms.livingRoom.icon;
  const BathroomIcon = rooms.bathroom.icon;
  const EntranceIcon = rooms.entrance.icon;

  const renderFirstRow = () => (
    <Block row space="around">
      <DashboardCard onPress={() => navigation.navigate('Bedroom')}>
        <BedroomIcon size={100} />
        <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
          {rooms.bedroom.name}
        </Text>
      </DashboardCard>

      <DashboardCard onPress={() => navigation.navigate('Garage')}>
        <GarageIcon size={100} />
        <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
          {rooms.garage.name}
        </Text>
      </DashboardCard>
    </Block>
  );

  const renderSecondRow = () => (
    <Block row space="around">
      <DashboardCard onPress={() => navigation.navigate('Garden')}>
        <GardenIcon size={100} />
        <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
          {rooms.garden.name}
        </Text>
      </DashboardCard>

      <DashboardCard onPress={() => navigation.navigate('Kitchen')}>
        <KitchenIcon size={100} />
        <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
          {rooms.kitchen.name}
        </Text>
      </DashboardCard>
    </Block>
  );

  const renderThirdRow = () => (
    <Block row space="around">
      <DashboardCard onPress={() => navigation.navigate('LivingRoom')}>
        <LivingRoomIcon size={100} />
        <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
          {rooms.livingRoom.name}
        </Text>
      </DashboardCard>

      <DashboardCard onPress={() => navigation.navigate('Bathroom')}>
        <BathroomIcon size={100} />
        <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
          {rooms.bathroom.name}
        </Text>
      </DashboardCard>
    </Block>
  );

  const renderFourthRow = () => (
    <Block row space="around">
      <DashboardCard onPress={() => navigation.navigate('Entrance')}>
        <EntranceIcon size={100} />
        <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
          {rooms.entrance.name}
        </Text>
      </DashboardCard>
    </Block>
  );

  // eslint-disable-next-line no-shadow
  const getUserName = (email) => email?.split('@')[0];

  return (
    <Block style={styles.dashboard}>
      <ScrollView contentContainerStyle={styles.mainStyles} showsVerticalScrollIndicator={false}>
        <Block column space="between" style={{ marginHorizontal: theme.sizes.base * 2 }}>
          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Text style={{ fontSize: 30, color: '#A7A7A7' }}>Hello,</Text>
            <Text style={{ fontSize: 50, fontWeight: '700' }}>{getUserName(email)}</Text>
          </Block>
          <IotCard />
          {renderFirstRow()}
          {renderSecondRow()}
          {renderThirdRow()}
          {renderFourthRow()}
        </Block>
      </ScrollView>
    </Block>
  );
};

Dashboard.navigationOptions = () => ({
  headerTitle: 'Dashboard',
});

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
    height: 1250,
    marginBottom: -theme.sizes.base * 6,
  },
});
