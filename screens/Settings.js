import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Slider } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { theme } from '../theme';
import { Block, Text, PanSlider } from '../components';
import * as authActions from '../store/actions/auth';
import Button from '../components/Button';

import rooms from '../rooms';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authActions.logout());
    navigation.navigate('Login');
  };

  return (
    <Block flex={1} style={styles.settings}>
      <Button mode="contained" onPress={() => handleLogOut()}>
        <Text style={{ color: 'white' }}>Log out</Text>
      </Button>
    </Block>
  );
};

Settings.navigationOptions = () => ({
  headerTitle: 'Settings',
});

Settings.defaultProps = {};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  // slider: {

  // }
});
