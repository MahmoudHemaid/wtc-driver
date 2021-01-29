import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import {Colors, SCREEN_KEYS} from '@app/constants';
import {TripDetailsScreen} from '@app/screens';

const AppStack = createStackNavigator();
export default function AppStackScreen({navigation, route}) {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.headerColor,
          borderWidth: 0,
          shadowOffset: {height: 0, width: 0},
        },
        headerTintColor: Colors.white,
        title: '',
        headerTitleAlign: 'center',
      }}
      initialRouteName={SCREEN_KEYS.MAIN_STACK}>
      <AppStack.Screen
        name={SCREEN_KEYS.MAIN_STACK}
        component={MainTabNavigator}
      />
      <AppStack.Screen
        name={SCREEN_KEYS.TRIP_DETAILS}
        component={TripDetailsScreen}
      />
    </AppStack.Navigator>
  );
}
