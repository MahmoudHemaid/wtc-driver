import 'react-native-gesture-handler';
import '@app/config/ReactotronConfig';
import * as React from 'react';
import Reactotron from 'reactotron-react-native';
import {AppContainer} from '@app/navigation';
import {StatusBar, TouchableOpacity} from 'react-native';

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.activeOpacity = 0.7;

console.ignoredYellowBox = [];
function App(props) {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <AppContainer />
    </>
  );
}

export default __DEV__ ? Reactotron.overlay(App) : App;
