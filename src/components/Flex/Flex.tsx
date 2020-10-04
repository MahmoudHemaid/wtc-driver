import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {flexStyles} from '@app/constants';

export const Flex: FC<ViewProps> = ({children, style, ...props}) => (
  <View style={[flexStyles.flexContainer, style]} {...props}>
    {children}
  </View>
);
