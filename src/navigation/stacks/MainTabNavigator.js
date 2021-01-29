import * as React from 'react';
import {
  HomeScreen,
  MyTripsScreen,
  ReportsScreen,
  MoreScreen,
} from '@app/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, SCREEN_KEYS} from '@app/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AvailabilitySwitcher} from '@app/components';
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({navigation, route}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  React.useEffect(() => {
    const routeName =
      route.state?.routes[route.state.index]?.name ?? SCREEN_KEYS.HOME;

    navigation.setOptions({headerTitle: getHeaderTitle(routeName)});
  }, [route]);
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: Colors.headerColor,
          borderTopWidth: 0,
        },
        activeTintColor: Colors.secondaryColor,
        inactiveTintColor: Colors.lightColor,
      }}
      initialRouteName={SCREEN_KEYS.HOME}>
      <BottomTab.Screen
        name={SCREEN_KEYS.HOME}
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name={'home'} {...props} />
          ),
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name={SCREEN_KEYS.MY_TRIPS}
        options={{
          title: 'My Trips',
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name={'map-marker-check'} {...props} />
          ),
          tabBarBadge: 2,
        }}
        component={MyTripsScreen}
      />
      <BottomTab.Screen
        name={SCREEN_KEYS.REPORTS}
        options={{
          title: 'Reports',
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name={'chart-bar'} {...props} />
          ),
        }}
        component={ReportsScreen}
      />
      <BottomTab.Screen
        name={SCREEN_KEYS.MORE}
        options={{
          title: 'More',
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name={'menu'} {...props} />
          ),
        }}
        component={MoreScreen}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(routeName) {
  switch (routeName) {
    case SCREEN_KEYS.HOME:
      return (props) => <AvailabilitySwitcher {...props} />;
    case SCREEN_KEYS.MY_TRIPS:
      return 'My Trips';
    case SCREEN_KEYS.REPORTS:
      return 'Reports';
    case SCREEN_KEYS.MORE:
      return 'More';
    default:
      return '';
  }
}
