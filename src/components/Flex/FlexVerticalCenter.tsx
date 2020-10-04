import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {flexStyles} from '@app/constants';

export const FlexVerticalCenter: FC<ViewProps> = ({
  children,
  style,
  ...props
}) => (
  <View style={[flexStyles.flexVerticalCenter, style]} {...props}>
    {children}
  </View>
);
