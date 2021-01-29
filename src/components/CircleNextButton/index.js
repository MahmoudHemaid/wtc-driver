import React from 'react';
import {StyleSheet, ViewPropTypes, TouchableOpacity} from 'react-native';
import {Layout, Styles, Fonts, Colors} from '../../constants';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: Layout.padding.normal,
    borderRadius: Layout.padding.normal * 2,
    marginTop: Layout.margin.xLarge,
  },
});

export default function CircleNextButton({color, style, ...props}) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: color}, style]}>
      <Ionicons name="chevron-forward-outline" size={24} color={Colors.white} />
    </TouchableOpacity>
  );
}

// PropTypes.oneOf([true, false, undefined])
CircleNextButton.propTypes = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  color: PropTypes.string,
};

CircleNextButton.defaultProps = {
  style: {},
  onPress: () => {},
  color: Colors.lightColor,
};
