import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Styles, Fonts, Colors} from '@app/constants';
import PropTypes from 'prop-types';

const getStyles = (size) =>
  StyleSheet.create({
    outerCircle: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: Colors.secondaryColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: size * 0.4,
      height: size * 0.4,
      borderRadius: size * 0.2,
      backgroundColor: Colors.white,
    },
  });

export default function Circle(props) {
  const {color, size} = props;
  const styles = useMemo(() => getStyles(size), [size]);

  return (
    <View style={[styles.outerCircle, {backgroundColor: color}]}>
      <View style={styles.innerCircle} />
    </View>
  );
}

// PropTypes.oneOf([true, false, undefined])
Circle.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Circle.defaultProps = {
  size: 24,
  color: Colors.secondaryColor,
};
