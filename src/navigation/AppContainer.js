import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './AppNavigation';
import {Provider} from 'react-redux';
import {store} from '@app/redux';

const AppContainer = (props) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppContainer;
