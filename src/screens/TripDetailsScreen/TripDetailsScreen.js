import React, {useEffect, useState} from 'react';
import {StyleSheet, View, InteractionManager} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts, SCREEN_KEYS} from '@app/constants';
import {Button} from 'native-base';
import {Circle, Flex, MapMarker, StyledText} from '@app/components';
import MapStyle from '@app/config/MapStyle.json';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LocationArrowIcon from '../../assets/icons/LocationArrowIcon';

const ASPECT_RATIO = Layout.window.width / Layout.window.height;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function TripDetailsScreen(props) {
  const {bottom} = useSafeAreaInsets();
  const {trip} = props.route?.params ?? {};
  const {id, latitude, longitude} = trip;
  const [isMapVisible, setIsMapVisible] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({title: '#' + id});
    InteractionManager.runAfterInteractions(() => setIsMapVisible(true));
  }, []);
  const onMyWayPress = () => {
    console.log('---here---');
    props.navigation.navigate(SCREEN_KEYS.MAIN_STACK, {
      screen: SCREEN_KEYS.HOME,
    });
  };
  return (
    <Screen style={[styles.container, {paddingBottom: bottom}]}>
      <View
        style={{
          padding: Layout.padding.normal,
          flexDirection: 'row',
        }}>
        <Flex>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Circle size={18} />
            <StyledText
              style={{paddingHorizontal: Layout.padding.large}}
              children={trip.address}
              color={Colors.white}
            />
          </View>
        </Flex>
        <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={styles.locationArrowContainer}>
            <LocationArrowIcon height={24} />
          </View>
          <StyledText color={Colors.white} children={'Cash'} />
        </View>
      </View>
      <View style={{flex: 1}}>
        <If condition={isMapVisible}>
          <MapView
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <MapMarker
              withBubble
              title={'0.5 km - 5 mins'}
              description={'Coleman Park'}
              coordinate={{latitude, longitude}}
            />
          </MapView>
        </If>
      </View>
      <View style={{padding: Layout.padding.large}}>
        <Button block success onPress={onMyWayPress}>
          <StyledText color={Colors.white} children={'On my way'} />
        </Button>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  locationArrowContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.lightColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Layout.margin.large,
  },
});
