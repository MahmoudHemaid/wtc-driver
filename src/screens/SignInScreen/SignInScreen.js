import {Flex} from '@app/components';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts} from '@app/constants';

export default function SignInScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text>Sign in</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
