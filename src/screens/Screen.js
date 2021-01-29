import React from 'react';
import {StyleSheet, View, ViewPropTypes} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Layout} from '@app/constants';
import PropTypes from 'prop-types';

export default function Screen(props) {
  const ViewComponent = props.safe ? SafeAreaView : View;
  return (
    <ViewComponent {...props} style={[styles.container, props.containerStyle]}>
      <View
        style={[props.safe ? styles.contentContainer : {flex: 1}, props.style]}>
        {props.children}
      </View>
    </ViewComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
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
  safe: PropTypes.oneOf([true, false, undefined]),
};

Screen.defaultProps = {
  style: {},
  containerStyle: {},
  safe: false,
};
