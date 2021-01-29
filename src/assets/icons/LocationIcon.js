import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function LocationIcon(props) {
  return (
    <Svg height={32} viewBox="0 0 64 64" width={32} {...props}>
      <G fill="#bddbff">
        <Path d="M32 3A29 29 0 113 32 29 29 0 0132 3zm25 29a25 25 0 10-25 25 25 25 0 0025-25z" />
        <Path d="M32 14l13 32-13-8zM32 14v24l-13 8z" />
      </G>
      <Path
        d="M32.926 13.624a1 1 0 00-1.852 0l-13 32a1 1 0 001.45 1.228L32 39.174l12.476 7.678a1 1 0 001.45-1.228zM31 19.118v18.323l-9.925 6.108zm2 18.323V19.118l9.925 24.431z"
        fill="#3d9ae2"
      />
      <Path
        d="M32 6a26 26 0 1026 26A26.03 26.03 0 0032 6zm0 50a24 24 0 1124-24 24.028 24.028 0 01-24 24z"
        fill="#3d9ae2"
      />
      <Path
        d="M32 2a30 30 0 1030 30A30.034 30.034 0 0032 2zm0 58a28 28 0 1128-28 28.032 28.032 0 01-28 28z"
        fill="#3d9ae2"
      />
    </Svg>
  );
}

export default LocationIcon;
