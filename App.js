import 'react-native-gesture-handler';
import '@app/config/ReactotronConfig';
import * as React from 'react';
import Reactotron from 'reactotron-react-native';
import {AppContainer} from '@app/navigation';

console.ignoredYellowBox = [];
function App(props) {
  return <AppContainer />;
}

export default __DEV__ ? Reactotron.overlay(App) : App;
