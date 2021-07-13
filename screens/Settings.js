import React from 'react';
import { StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux';
import { theme } from '../theme';
import { Block, Text } from '../components';
import * as authActions from '../store/actions/auth';
import Button from '../components/Button';

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
});
