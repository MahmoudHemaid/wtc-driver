import React from 'react';
import {StyleSheet, View, ViewPropTypes} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Layout} from '@app/constants';
import PropTypes from 'prop-types';

export default function Screen(props) {
  const ViewComponent = props.fullscreen ? View : SafeAreaView;
  return (
    <ViewComponent {...props} style={[styles.container, props.containerStyle]}>
      <View
        style={[
          props.fullscreen ? {flex: 1} : styles.contentContainer,
          props.style,
        ]}>
        {props.children}
      </View>
    </ViewComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryWhite,
  },
  contentContainer: {
    flex: 1,
    paddingTop: Layout.padding.xLarge,
    paddingHorizontal: Layout.padding.large,
  },
});

Screen.propTypes = {
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  fullscreen: PropTypes.oneOf([true, false, undefined]),
};

Screen.defaultProps = {
  style: {},
  containerStyle: {},
  fullscreen: false,
};
