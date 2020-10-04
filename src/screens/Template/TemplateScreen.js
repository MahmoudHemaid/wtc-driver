import React from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts} from '@app/constants';

export default function TemplateScreen(props) {
  return <Screen style={styles.container}></Screen>;
}

const styles = StyleSheet.create({
  container: {},
});
