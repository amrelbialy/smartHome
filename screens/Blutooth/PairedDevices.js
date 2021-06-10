/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
// import {Text} from 'native-base';
// import { LineChart, Path } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
import { Content, Text, Card, CardItem, Body, Switch } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import BluetoothSerial from 'react-native-bluetooth-serial';
import { theme } from '../../theme';
import { Block } from '../../components';
// import rooms from '../rooms';

const PairedDevices = (props) => {
  const [blutoothEnabled, setBlutooth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pairedDevices, setPairedDevices] = useState([]);
  const [connecting, setConnecting] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState({});
  const [deviceToConnect, setDeviceToConnect] = useState({});
  const enable = () => {
    BluetoothSerial.enable()
      .then((res) => {
        setBlutooth(true);
        setLoading(false);
      })
      .catch((err) =>
        ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
      );
  };

  useEffect(() => {
    enable();
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then((values) => {
      const [isEnabled, devices] = values;

      setBlutooth(isEnabled);
      setPairedDevices(devices);
    });

    BluetoothSerial.on('bluetoothEnabled', () => {
      Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then((values) => {
        const [devices] = values;
        setPairedDevices(devices);
      });

      BluetoothSerial.on('bluetoothDisabled', () => {
        setPairedDevices([]);
      });
      BluetoothSerial.on('error', (err) =>
        ToastAndroid.showWithGravity(
          `Error: ${err.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        )
      );
    });
  }, [blutoothEnabled]);

  const disable = () => {
    BluetoothSerial.disable()
      .then((res) => setBlutooth(false))
      .catch((err) =>
        ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
      );
  };

  const toggleBluetooth = (value) => {
    if (value === true) {
      enable();
    } else {
      disable();
    }
  };

  const connect = (device) => {
    setConnecting(true);
    setDeviceToConnect(device);
    BluetoothSerial.connect(device.id)
      .then((res) => {
        setConnectedDevice(device);
        setConnecting(false);
        setDeviceToConnect({});
        console.log(`Connected to device ${device.name}`);

        ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
      })
      .catch((err) =>
        ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
      );
  };

  console.log(blutoothEnabled);
  console.log(loading);
  console.log(connectedDevice);

  if (loading || !blutoothEnabled) {
    return <ActivityIndicator size="small" color={theme.colors.accent} />;
  }

  const renderItem = (item) => (
    <TouchableOpacity onPress={() => connect(item.item)}>
      <Card>
        <CardItem header bordered style={styles.doorHeader}>
          <Content contentContainerStyle={styles.contentStyle}>
            <Entypo size={20} color={theme.colors.accent} name="mobile" {...props} />
            <Text>{item.item.name ? item.item.name : item.item.id}</Text>
          </Content>
          {connecting &&
            item.item.id === deviceToConnect.id &&
            item.item.name === deviceToConnect.name && (
              <ActivityIndicator size="small" color={theme.colors.accent} />
            )}

          {!connecting &&
            item.item.id === connectedDevice.id &&
            item.item.name === connectedDevice.name && (
              <Block>
                <Entypo size={20} color={theme.colors.accent} name="check" {...props} />
              </Block>
            )}
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
  return (
    <Block style={styles.wrapper}>
      <FlatList
        style={{ flex: 1 }}
        data={pairedDevices}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderItem(item)}
      />
    </Block>
  );
};

PairedDevices.navigationOptions = (navData) => ({
  headerTitle: 'Blutooth',
  headerRight: (
    <Switch
      trackColor={{ false: '#767577', true: `${theme.colors.accent}` }}
      thumbColor="#f4f3f4"
      ios_backgroundColor="#3e3e3e"
      // onValueChange={()=>screenProps.toggleBluetooth()}
      // value={screenProps.blutoothEnabled}
    />
  ),
});

PairedDevices.defaultProps = {};

export default PairedDevices;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  doorHeader: {
    flex: 1,
    justifyContent: 'space-between',
  },
  // eslint-disable-next-line react-native/no-color-literals
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
    padding: 0,
  },
});
