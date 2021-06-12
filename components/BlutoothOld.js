/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';

const _ = require('lodash');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      loading: false,
      livingRoomconnected: false,
      garageDoorConnected: false,
      livingRoomCurtain: false,
      gardenPump: false,
      fan: false,
    };
  }

  UNSAFE_componentWillMount() {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then((values) => {
      const [isEnabled, devices] = values;
      this.setState({ isEnabled, devices });
    });

    BluetoothSerial.on('bluetoothEnabled', () => {
      Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then((values) => {
        const [isEnabled, devices] = values;
        this.setState({ devices });
      });

      BluetoothSerial.on('bluetoothDisabled', () => {
        this.setState({ devices: [] });
      });
      BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`));
    });
  }

  connect(device) {
    console.log('device', device);

    this.setState({ connecting: true });
    BluetoothSerial.connect(device.id)
      .then((res) => {
        console.log('res', res);
        console.log(`Connected to device ${device.name}`);

        ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
      })
      .catch((err) => console.log(('err', err.message)));
  }

  _renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.connect(item.item)}>
        <View style={styles.deviceNameWrap}>
          <Text style={styles.deviceName}>{item.item.name ? item.item.name : item.item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  enable() {
    BluetoothSerial.enable()
      .then((res) => this.setState({ isEnabled: true }))
      .catch((err) => Toast.showShortBottom(err.message));
  }

  disable() {
    BluetoothSerial.disable()
      .then((res) => this.setState({ isEnabled: false }))
      .catch((err) => Toast.showShortBottom(err.message));
  }

  toggleBluetooth(value) {
    if (value === true) {
      this.enable();
    } else {
      this.disable();
    }
  }

  discoverAvailableDevices() {
    if (this.state.discovering) {
      return false;
    }
    this.setState({ loading: true, discovering: true });
    BluetoothSerial.discoverUnpairedDevices()
      .then((unpairedDevices) => {
        const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
        console.log('unpairedDevices', uniqueDevices);
        this.setState({ unpairedDevices: uniqueDevices, loading: false, discovering: false });
      })
      .catch((err) => console.log(err.message));
  }

  toggleSwitchLivingRoom() {
    console.log('connected', this.state.livingRoomconnected);
    if (this.state.livingRoomconnected) {
      BluetoothSerial.write('A')
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device');
          this.setState({ livingRoomconnected: false });
        })
        .catch((err) => console.log(err.message));
    } else {
      BluetoothSerial.write('a')
        .then((res) => {
          console.log(res);
          console.log('Successfuly closed device');
          this.setState({ livingRoomconnected: true });
        })
        .catch((err) => console.log(err.message));
    }
  }

  toggleDoorGarage() {
    console.log('connected', this.state.garageDoorConnected);
    if (this.state.garageDoorConnected) {
      BluetoothSerial.write('E')
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device');
          this.setState({ garageDoorConnected: false });
        })
        .catch((err) => console.log(err.message));
    } else {
      BluetoothSerial.write('e')
        .then((res) => {
          console.log(res);
          console.log('Successfuly closed device');
          this.setState({ garageDoorConnected: true });
        })
        .catch((err) => console.log(err.message));
    }
  }

  toggleCurtainLivingRoom() {
    console.log('connected', this.state.livingRoomCurtain);
    if (this.state.livingRoomCurtain) {
      BluetoothSerial.write('k')
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device');
          this.setState({ livingRoomCurtain: false });
        })
        .catch((err) => console.log(err.message));
    } else {
      BluetoothSerial.write('l')
        .then((res) => {
          console.log(res);
          console.log('Successfuly closed device');
          this.setState({ livingRoomCurtain: true });
        })
        .catch((err) => console.log(err.message));
    }
  }

  toggleGardenPump() {
    console.log('connected', this.state.gardenPump);
    if (this.state.gardenPump) {
      BluetoothSerial.write('I')
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device');
          this.setState({ gardenPump: false });
        })
        .catch((err) => console.log(err.message));
    } else {
      BluetoothSerial.write('i')
        .then((res) => {
          console.log(res);
          console.log('Successfuly closed device');
          this.setState({ gardenPump: true });
        })
        .catch((err) => console.log(err.message));
    }
  }

  toggleFan() {
    console.log('connected', this.state.fan);
    if (this.state.fan) {
      BluetoothSerial.write('J')
        .then((res) => {
          console.log(res);
          console.log('Successfuly wrote to device');
          this.setState({ fan: false });
        })
        .catch((err) => console.log(err.message));
    } else {
      BluetoothSerial.write('j')
        .then((res) => {
          console.log(res);
          console.log('Successfuly closed device');
          this.setState({ fan: true });
        })
        .catch((err) => console.log(err.message));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Bluetooth Devices</Text>
          <View style={styles.toolbarButton}>
            <Switch
              value={this.state.isEnabled}
              onValueChange={(val) => this.toggleBluetooth(val)}
            />
          </View>
        </View>
        {this.state.loading ? (
          <Text>loading</Text>
        ) : (
          <>
            <Button
              onPress={this.discoverAvailableDevices.bind(this)}
              title="Scan for Devices"
              color="#841584"
            />
            <FlatList
              style={{ flex: 1 }}
              data={this.state.devices}
              keyExtractor={(item) => item.id}
              renderItem={(item) => this._renderItem(item)}
            />
            <Text>breeak</Text>
            <FlatList
              style={{ flex: 1 }}
              data={this.state.unpairedDevices}
              keyExtractor={(item) => item.id}
              renderItem={(item) => this._renderItem(item)}
            />
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  deviceName: {
    color: 'black',
    fontSize: 17,
  },
  deviceNameWrap: {
    borderBottomWidth: 1,
    margin: 10,
  },
  toolbar: {
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 30,
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
    textAlign: 'center',
  },
});
