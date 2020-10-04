import * as React from 'react';
import {SignInScreen} from '@app/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_KEYS} from '@app/constants';

const AuthStack = createStackNavigator();
export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_KEYS.SIGN_IN}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={SCREEN_KEYS.SIGN_IN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
}
