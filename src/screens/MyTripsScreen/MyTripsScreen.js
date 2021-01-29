import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts, SCREEN_KEYS} from '@app/constants';
import faker from 'faker';
import {StyledText, Trip} from '@app/components';

const trips = Array(150)
  .fill(0)
  .map(() => ({
    id: faker.random.uuid().split('-')[0],
    address: faker.address.streetName() + ', ' + faker.address.streetAddress(),
    latitude: 37.33533974,
    longitude: -122.04156726,
    date: faker.date.recent().toString(),
  }));

export default function MyTripsScreen(props) {
  const onTripPress = useCallback(
    (trip) =>
      props.navigation.navigate(SCREEN_KEYS.TRIP_DETAILS, {
        trip,
      }),
    [],
  );
  const renderItem = useCallback(({item, index}) => {
    return <Trip index={index} onTripPress={onTripPress} item={item} />;
  }, []);

  const keyExtractor = useCallback((item, index) => item.id, []);

  return (
    <Screen style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={styles.listContentContainer}
          data={trips}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          windowSize={5}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  listContentContainer: {
    padding: Layout.padding.small,
  },
});
