import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {flexStyles} from '@app/constants';

export const FlexCenter: FC<ViewProps> = ({children, style, ...props}) => (
  <View style={[flexStyles.flexCenter, style]} {...props}>
    {children}
  </View>
);
