import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';

import { theme } from '../theme';
import { emailValidator, passwordValidator, nameValidator } from '../utils/loginValidation';

export default function SignUp({ navigation }) {
  const [homeId, setHomeId] = useState({ value: '', error: '' });
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Home ID"
        returnKeyType="next"
        value={homeId.value}
        onChangeText={(text) => setHomeId({ value: text, error: '' })}
        error={!!homeId.error}
        errorText={homeId.error}
      />
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onSignUpPressed} style={{ marginTop: 24 }}>
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

SignUp.navigationOptions = (navData) => ({
  headerTitle: 'Sign up',
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.surface,

    flex: 1,

    justifyContent: 'center',
    maxWidth: 340,
    padding: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.accent,
  },
});
