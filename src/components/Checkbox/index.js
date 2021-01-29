import React from 'react';
import {ViewPropTypes, StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Layout, Styles, Fonts, Shadow} from '@app/constants';

import Ionicons from 'react-native-vector-icons/Ionicons';
import StyledText from '../StyledText';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    ...Shadow.tiny,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: Layout.margin.small,
    backgroundColor: 'transparent',
    borderRadius: Layout.radius.tiny,
  },
  icon: {},
  text: {},
});
export default function CheckBox(props) {
  const {
    checked,
    children,
    onPress,
    containerStyle,
    titleStyle,
    iconStyle,
    iconSize,
    iconContainerStyle,
    checkedColor,
    uncheckedColor,
    uncheckedTextColor,
    size,
    textSize,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, ...containerStyle}}>
      <View
        style={{
          ...styles.iconContainer,
          ...{width: size, height: size, borderColor: uncheckedColor},
          ...iconContainerStyle,
        }}>
        {checked && (
          <Ionicons
            style={{...styles.icon, ...iconStyle}}
            size={iconSize}
            name={'md-checkmark'}
            color={checkedColor}
          />
        )}
      </View>
      <StyledText
        style={{
          ...styles.text,
          color: uncheckedTextColor,
          ...titleStyle,
        }}
        size={textSize}>
        {children}
      </StyledText>
    </TouchableOpacity>
  );
}

CheckBox.propTypes = {
  children: PropTypes.string,
  textSize: PropTypes.number,
  containerStyle: ViewPropTypes.style,
  iconContainerStyle: ViewPropTypes.style,
  iconStyle: ViewPropTypes.style,
  size: PropTypes.number,
  iconSize: PropTypes.number,
  checked: PropTypes.oneOf([true, false, undefined]),
  onPress: PropTypes.func,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  uncheckedTextColor: PropTypes.string,
};
CheckBox.defaultProps = {
  children: '',
  textSize: Fonts.size.normal,
  containerStyle: {},
  iconContainerStyle: {},
  iconStyle: {},
  size: 20,
  iconSize: 16,
  checked: PropTypes.oneOf([true, false, undefined]),
  onPress: () => {},
  checkedColor: Colors.secondaryColor,
  uncheckedColor: Colors.lightColor,
  uncheckedTextColor: Colors.textColor,
};
