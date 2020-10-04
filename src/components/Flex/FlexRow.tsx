import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {flexStyles} from '@app/constants';

export const FlexRow: FC<ViewProps> = ({children, style, ...props}) => (
  <View style={[flexStyles.flexRowContainer, style]} {...props}>
    {children}
  </View>
);
