import * as React from 'react';
import {
  FleetCodeScreen,
  PhoneNumberScreen,
  VerificationCodeScreen,
} from '@app/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_KEYS} from '@app/constants';

const AuthStack = createStackNavigator();
export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_KEYS.FLEE_CODE}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={SCREEN_KEYS.FLEE_CODE}
        component={FleetCodeScreen}
      />
      <AuthStack.Screen
        name={SCREEN_KEYS.PHONE_NUMBER}
        component={PhoneNumberScreen}
      />
      <AuthStack.Screen
        name={SCREEN_KEYS.VERIFICATION_CODE}
        component={VerificationCodeScreen}
      />
    </AuthStack.Navigator>
  );
}
