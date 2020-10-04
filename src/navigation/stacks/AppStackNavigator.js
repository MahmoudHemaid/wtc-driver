import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import {SCREEN_KEYS} from '@app/constants';

const AuthStack = createStackNavigator();
export default function AppStackScreen({navigation, route}) {
  return (
    <AuthStack.Navigator initialRouteName={SCREEN_KEYS.MAIN_STACK}>
      <AuthStack.Screen
        name={SCREEN_KEYS.MAIN_STACK}
        component={MainTabNavigator}
      />
    </AuthStack.Navigator>
  );
}
