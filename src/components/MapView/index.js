import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Layout, Styles, Fonts} from '@app/constants';
import LocationIcon from '@app/assets/icons/LocationIcon';
import RNMapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyle from '@app/config/MapStyle.json';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@app/config';

const ASPECT_RATIO = Layout.window.width / Layout.window.height;
const LATITUDE_DELTA = 0.008;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// ref & userLocation is Required
function MapView({userLocation, ...props}, ref) {
  const [cameraHeading, setCameraHeading] = React.useState(0);
  function updateCameraHeading() {
    ref?.current
      ?.getCamera()
      .then((camera) => setCameraHeading(camera.heading))
      .catch((error) => console.log('updateCameraHeading: ', error));
  }
  useEffect(() => {
    updateCameraHeading();
  }, [userLocation]);
  return (
    <View style={styles.container}>
      <RNMapView
        style={styles.map}
        ref={ref}
        initialRegion={{
          latitude: 24.774265,
          longitude: 46.738586,
          ...userLocation,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        customMapStyle={MapStyle}
        showsBuildings={false}
        showsTraffic={false}
        onTouchEnd={updateCameraHeading}
        onTouchCancel={updateCameraHeading}
        onTouchStart={updateCameraHeading}
        onTouchMove={updateCameraHeading}
        {...props}>
        {props.children}
        <If condition={!!userLocation}>
          <Marker
            key={'location'}
            title={'My locaion'}
            coordinate={userLocation}
            reuseIdentifier={'location'}
            flat
            anchor={{x: 0.5, y: 0.5}}>
            <View
              style={{
                transform: [
                  {rotate: `${userLocation?.heading - cameraHeading}deg`},
                ],
              }}>
              <LocationIcon />
            </View>
          </Marker>
          {/* <MapViewDirections
            origin={userLocation}
            destination={{latitude: 37.32787, longitude: -122.03686}}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor={Colors.success}
            resetOnChange={false}
          /> */}
        </If>
      </RNMapView>
    </View>
  );
}
export default React.forwardRef(MapView);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
