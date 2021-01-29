import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Context} from '../utils';
import {RootStackNavigator} from './stacks';

export default (props) => {
  const [isLogged, setIsLogged] = useState(false);

  const context = {
    isLogged,
    signIn: () => {
      setIsLogged(true);
    },
    signOut: () => {
      setIsLogged(false);
    },
  };
  return (
    <Context.Provider value={context}>
      <NavigationContainer>
        <RootStackNavigator isLogged={isLogged} />
      </NavigationContainer>
    </Context.Provider>
  );
};
