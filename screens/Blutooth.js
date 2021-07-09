/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
  View,
} from 'react-native';
// import {Text} from 'native-base';
// import { LineChart, Path } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
import { Content, Text, Card, CardItem, Body, Switch, Right } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import BluetoothSerial from 'react-native-bluetooth-serial';
import { theme } from '../theme';
import { Block } from '../components';

const _ = require('lodash');
// import rooms from '../rooms';

const Blutooth = (props) => {
  const [blutoothEnabled, setBlutooth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pairedDevices, setPairedDevices] = useState([]);
  const [connecting, setConnecting] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState({});
  const [deviceToConnect, setDeviceToConnect] = useState({});
  const [discovering, setDiscovering] = useState(false);
  const [availableDevices, setAvailableDevices] = useState([]);

  useEffect(() => {
    // Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then((values) => {
    //   const [isEnabled, devices] = values;
    //   // setBlutooth(isEnabled);
    //   // setPairedDevices(devices);
    //   setPairedDevices(devices);
    //   setLoading(false);
    // });
    // BluetoothSerial.on('bluetoothEnabled', () => {
    //   Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then((values) => {
    //     console.log('values', values);
    //     const [devices] = values;
    //     setPairedDevices(devices);
    //     setLoading(false);
    //   });
    //   BluetoothSerial.on('bluetoothDisabled', () => {
    //     setPairedDevices([]);
    //   });
    //   BluetoothSerial.on('error', (err) =>
    //     ToastAndroid.showWithGravity(
    //       `Error: ${err.message}`,
    //       ToastAndroid.SHORT,
    //       ToastAndroid.CENTER
    //     )
    //   );
    // });
  }, [blutoothEnabled]);

  const enable = () => {
    BluetoothSerial.enable()
      .then((res) => {
        BluetoothSerial.list().then((res) => {
          if (res.length === 0) {
          } else {
            setPairedDevices(res);
          }

          setBlutooth(true);
          setLoading(false);
        });
        setBlutooth(true);
        setLoading(false);
      })
      .catch((err) =>
        ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
      );
  };

  const disable = () => {
    BluetoothSerial.disable()
      .then((res) => {
        // setPairedDevices([]);
        setBlutooth(false);
      })
      .catch((err) =>
        ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
      );
  };

  const toggleBluetooth = (value) => {
    if (value === true) {
      setLoading(true);
      enable();
      discoverAvailableDevices();
    } else {
      disable();
    }
  };

  const discoverAvailableDevices = () => {
    setDiscovering(true);
    BluetoothSerial.discoverUnpairedDevices()
      .then((unpairedDevices) => {
        const uniqueDevices = _.uniqBy(unpairedDevices, 'id');

        setAvailableDevices(uniqueDevices);

        setDiscovering(false);
      })
      .catch((err) => console.log(err.message));
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

        ToastAndroid.showWithGravity(
          `Connected to device ${device.name}`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })

      .catch((err) =>
        ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.CENTER)
      );
  };

  // console.log('blutoothEnabled', blutoothEnabled);
  // console.log('loading', loading);
  // console.log('pairedDevices', pairedDevices);
  console.log('availableDevieces', availableDevices);

  const renderItem = (item) => (
    <TouchableOpacity onPress={() => connect(item.item)}>
      <View style={styles.list}>
        <Entypo size={20} color={theme.colors.accent} name="mobile" {...props} />

        <View style={styles.bordered}>
          <Text>{item.item.name ? item.item.name : item.item.id}</Text>

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
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderTitle = () => (
    <Block style={styles.toolbar}>
      <Text style={styles.toolbarTitle}>Bluetooth </Text>
      <Block style={styles.toolbarButton}>
        <Switch
          trackColor={{ false: '#767577', true: `${theme.colors.accent}` }}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#3e3e3e"
          value={blutoothEnabled}
          onValueChange={(val) => toggleBluetooth(val)}
        />
      </Block>
    </Block>
  );

  const renderPairedSection = () => (
    <Block style={styles.wrapper}>
      <Card>
        <CardItem bordered>
          <Text>Paired Devices</Text>
        </CardItem>
        <CardItem>
          <FlatList
            style={{ flex: 1, height: 200 }}
            data={pairedDevices}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderItem(item)}
          />
        </CardItem>
      </Card>
    </Block>
  );

  const renderAvailableSection = () => (
    <View>
      <Card>
        <CardItem bordered style={styles.availableDevices}>
          <Text>Available Devices</Text>
          {discovering && <ActivityIndicator size="small" color={theme.colors.accent} />}
        </CardItem>
        <CardItem>
          <FlatList
            style={{ flex: 1, height: 300 }}
            data={availableDevices}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderItem(item)}
          />
        </CardItem>
      </Card>
    </View>
  );

  return (
    <>
      {renderTitle()}
      {loading && (
        <Block style={styles.loading}>
          <ActivityIndicator size="large" color={theme.colors.accent} />
        </Block>
      )}

      {blutoothEnabled ? (
        <>
          {renderPairedSection()}
          {renderAvailableSection()}
        </>
      ) : (
        <Block style={styles.blutoothClosed}>
          <Text>Please open bluetooth on your device first</Text>
        </Block>
      )}
    </>
  );
};

Blutooth.navigationOptions = (navData) => ({
  headerTitle: 'Blutooth Connection',
});

Blutooth.defaultProps = {};

export default Blutooth;

const styles = StyleSheet.create({
  blutoothClosed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  // eslint-disable-next-line react-native/no-color-literals
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 0,
  },
  toolbar: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  toolbarButton: {
    marginTop: 8,
    width: 50,
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#e8e8e8',
    padding: 10,
    borderBottomWidth: 1,
  },
  bordered: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  availableDevices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
