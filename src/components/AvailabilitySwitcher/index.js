import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Styles, Fonts, Colors} from '@app/constants';
import PropTypes from 'prop-types';
import SteeingWheelIcon from '../../assets/icons/SteeingWheelIcon';
import {Switch} from 'react-native-switch';

const styles = StyleSheet.create({
  container: {},
});

export default function AvailabilitySwitcher(props) {
  const [active, setActive] = React.useState(true);
  const renderInsideCircle = React.useCallback(
    () => (
      <SteeingWheelIcon color={active ? Colors.success : Colors.lightColor} />
    ),
    [active],
  );
  return (
    <Switch
      value={active}
      activeText={''}
      inActiveText={''}
      onValueChange={setActive}
      renderInsideCircle={renderInsideCircle}
      circleBorderWidth={0}
    />
  );
}

// PropTypes.oneOf([true, false, undefined])
AvailabilitySwitcher.propTypes = {};

AvailabilitySwitcher.defaultProps = {};
