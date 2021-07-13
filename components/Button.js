import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../theme';

// eslint-disable-next-line react/prop-types
export default function Button({ mode, style }) {
  return (
    <PaperButton
      style={[styles.button, { backgroundColor: theme.colors.accent }, style]}
      labelStyle={styles.text}
      mode={mode}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
