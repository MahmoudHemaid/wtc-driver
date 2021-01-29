import { Layout } from '@app/constants';
import {useEffect, useRef, useState} from 'react';
import Geolocation, {
  GeoPosition,
  GeoError,
  GeoOptions,
  GeoCoordinates,
} from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native'

export function useGeolocation(options?: GeoOptions) {
  const watchId = useRef(0);
  const [location, setLocation] = useState<GeoCoordinates | null>(null);
  const [error, setError] = useState<GeoError | null>(null);
  const [granted, setGranted] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);

  const requestAuthorization = async () => {
    setLoading(true);
    
    const result = await (Layout.isAndroid ? PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) :  Geolocation.requestAuthorization('whenInUse'));
    setGranted(result == 'granted');
    setLoading(false);
  };

  useEffect(() => {
    requestAuthorization();
  }, []);

  useEffect(() => {
    const id = Geolocation.watchPosition(
      ({coords}) => setLocation(coords),
      setError,
      {
        ...options,
        enableHighAccuracy: true,
        fastestInterval: 2000,
        interval: 5000,
        forceRequestLocation: true,
        distanceFilter: 5,
      },
    );
    watchId.current = id;
    return () => {
      Geolocation.clearWatch(watchId.current);
    };
  }, [options, granted]);

  return {location, error, granted, loading, requestAuthorization};
}
