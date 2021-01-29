import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Styles, Fonts, Colors, Shadow} from '@app/constants';
import PropTypes from 'prop-types';
import {Marker} from 'react-native-maps';
import StyledText from '../StyledText';
import Circle from '../Circle';

const styles = StyleSheet.create({
  container: {},
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  stick: {
    width: 4,
    height: 12,
    backgroundColor: Colors.white,
    zIndex: 0,
  },
  point: {
    width: 6,
    height: 4,
    borderRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
  },
  bubbleContainer: {
    ...Shadow.small,
    margin: Layout.margin.small,
  },
  bubble: {
    backgroundColor: Colors.white,
    paddingVertical: Layout.padding.small,
    paddingHorizontal: Layout.padding.large,
    borderRadius: 25,
  },
  triangle: {
    alignSelf: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 12,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.white,
  },
});

export default function MapMarker(props) {
  const {coordinate, withBubble, title, description, ...rest} = props;
  if (!coordinate) return <></>;
  return (
    <Marker anchor={{x: 0.5, y: 1}} coordinate={coordinate} {...rest}>
      <If condition={withBubble}>
        <View style={styles.bubbleContainer}>
          <View style={styles.bubble}>
            <StyledText bold center color={Colors.black} children={title} />
            <StyledText center children={description} />
          </View>
          <View style={styles.triangle} />
        </View>
      </If>
      <View style={{alignItems: 'center'}}>
        <Circle />
        <View style={styles.stick} />
        <View style={styles.point} />
      </View>
    </Marker>
  );
}

// PropTypes.oneOf([true, false, undefined])
MapMarker.propTypes = {
  coordinate: PropTypes.object, // {latitude, longitude}
  withBubble: PropTypes.oneOf([true, false, undefined]),
  title: PropTypes.string,
  description: PropTypes.string,
};

MapMarker.defaultProps = {
  coordinate: null,
  withBubble: false,
  title: '',
  description: '',
};
