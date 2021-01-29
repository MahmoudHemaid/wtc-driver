import React, {useEffect, useRef, useCallback, useState} from 'react';
import {Easing, StyleSheet, TouchableOpacity, View} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts} from '@app/constants';
import {useGeolocation} from '@app/hooks';
import {StyledText, MapView, FlexCenter, MapMarker} from '@app/components';
import {useIsFocused} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@app/config';

export default function HomeScreen(props) {
  const mapRef = useRef(null);
  const circleRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const isFocused = useIsFocused();
  const {
    location,
    granted,
    loading: fetchingLocation,
    requestAuthorization,
  } = useGeolocation();
  const onReceiveTrip = () => {
    setIsVisible(true);
    mapRef.current.animateCamera({
      center: {
        latitude: 37.32787,
        longitude: -122.03686,
      },
      heading: 0,
      zoom: 14,
    });
    // circleRef.current?.reAnimate(100, 0, 15000);
  };
  useEffect(() => {
    setTimeout(() => {
      onReceiveTrip();
    }, 5000);
  }, []);
  const onAcceptPress = () => {
    setIsVisible(false);
  };
  const insets = useSafeAreaInsets();
  return (
    <Screen style={styles.container}>
      <If condition={granted || fetchingLocation}>
        <If condition={!!location && isFocused}>
          <MapView ref={mapRef} userLocation={location}>
            <If condition={isVisible}>
              <MapMarker
                withBubble
                title={'0.5 km - 5 mins'}
                description={'Coleman Park'}
                coordinate={{latitude: 37.32787, longitude: -122.03686}}
              />
              <MapViewDirections
                origin={location}
                destination={{latitude: 37.32787, longitude: -122.03686}}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor={Colors.success}
                resetOnChange={false}
              />
            </If>
          </MapView>
        </If>
        <If condition={!location}>
          <FlexCenter>
            <StyledText center children={'Fetching user location'} />
          </FlexCenter>
        </If>
      </If>
      <If condition={!granted && !fetchingLocation}>
        <FlexCenter>
          <StyledText
            center
            touchable
            onPress={requestAuthorization}
            children={'Location permission is not granted, press to refresh.'}
          />
        </FlexCenter>
      </If>
      <Modal
        isVisible={isVisible}
        style={{
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: Colors.primaryColor,
            padding: Layout.padding.normal,
            paddingBottom: Math.max(Layout.padding.normal, insets.bottom),
            borderTopRightRadius: Layout.radius.normal,
            borderTopLeftRadius: Layout.radius.normal,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginVertical: Layout.margin.normal}}
            onPress={onAcceptPress}>
            <AnimatedCircularProgress
              ref={circleRef}
              size={120}
              prefill={100}
              duration={15000}
              easing={Easing.linear}
              width={10}
              rotation={0}
              fill={0}
              tintColor={Colors.secondaryColor}
              onAnimationComplete={() => setIsVisible(false)}
              backgroundColor={Colors.lightColor}>
              {(fill) => (
                <View style={{padding: Layout.padding.tiny}}>
                  <StyledText children={'Tap to accept'} />
                </View>
              )}
            </AnimatedCircularProgress>
          </TouchableOpacity>
          <StyledText children={'Mahmoud Hemaid'} />
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
