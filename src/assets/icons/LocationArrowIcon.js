import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '@app/constants';

function LocationArrowIcon(props) {
  return (
    <Svg width={24} height={32} viewBox="0 0 24 32" {...props}>
      <Path fill={props.color || Colors.white} d="M24 32l-12-8-12 8L12 0z" />
    </Svg>
  );
}

export default LocationArrowIcon;
