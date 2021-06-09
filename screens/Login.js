import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../theme'
import { emailValidator, passwordValidator } from '../utils/loginValidation'


export default function LoginScreen({ navigation }) {
  
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.navigate('Dashboard')
  }
//  <BackButton goBack={navigation.goBack} />
//       <Logo />
  return (
    <View style={styles.container}>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
         <Text>Login</Text>
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
})