import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './AppNavigation';
import {Provider} from 'react-redux';
import {store} from '@app/redux';
import {Root} from 'native-base';

const AppContainer = (props) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Root>
          <AppNavigation />
        </Root>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppContainer;
