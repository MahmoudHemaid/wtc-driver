import * as React from 'react';
import {HomeScreen} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN_KEYS} from '@app/constants';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({navigation, route}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  React.useEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [route]);
  return (
    <BottomTab.Navigator initialRouteName={SCREEN_KEYS.HOME}>
      <BottomTab.Screen name={SCREEN_KEYS.HOME} component={HomeScreen} />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? SCREEN_KEYS.HOME;

  switch (routeName) {
    case SCREEN_KEYS.HOME:
      return 'Home';
  }
}
