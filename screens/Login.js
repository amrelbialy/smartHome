import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
// import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';

import { theme } from '../theme';
import { emailValidator, passwordValidator } from '../utils/loginValidation';
import * as authActions from '../store/actions/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const onLoginPress = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    } else {
      loginHandler();
    }
  };
  const loginHandler = async () => {
    // let action;
    // if ( ) {
    //   action = authActions.signup(formState.inputValues.email, formState.inputValues.password);
    // } else {
    //   action = authActions.login(email, password);
    // }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(authActions.login(email.value, password.value));
      navigation.navigate('Dashboard');
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Logo />
      <Header>Please Log in</Header>
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

      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.accent} />
      ) : (
        <Button
          mode="contained"
          style={{ width: '100%', backgroundColor: theme.colors.accent }}
          onPress={onLoginPress}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </Button>
      )}
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  forgot: {
    color: theme.colors.secondary,
    fontSize: 13,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 24,
    width: '100%',
  },
  link: {
    color: theme.colors.accent,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});
