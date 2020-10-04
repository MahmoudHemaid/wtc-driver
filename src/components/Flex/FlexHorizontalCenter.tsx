import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {flexStyles} from '@app/constants';

export const FlexHorizontalCenter: FC<ViewProps> = ({
  children,
  style,
  ...props
}) => (
  <View style={[flexStyles.flexHorizontalCenter, style]} {...props}>
    {children}
  </View>
);
