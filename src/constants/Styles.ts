import {StyleSheet, FlexStyle} from 'react-native';

export const flexContainer: FlexStyle = {
  flex: 1,
};

export const flexGrow: FlexStyle = {
  flexGrow: 1,
};

export const flexWrap: FlexStyle = {
  flexWrap: 'wrap',
};

export const justifyContentCenter: FlexStyle = {
  justifyContent: 'center',
};

export const alignItemsCenter: FlexStyle = {
  alignItems: 'center',
};

export const flexDirectionRow: FlexStyle = {
  flexDirection: 'row',
};

export const justifyContentSpaceBetween: FlexStyle = {
  justifyContent: 'space-between',
};

export const justifyContentFlexEnd: FlexStyle = {
  justifyContent: 'flex-end',
};

export const justifyContentSpaceEvenly: FlexStyle = {
  justifyContent: 'space-evenly',
};

export const flexRowContainer: FlexStyle = {
  ...flexContainer,
  ...flexDirectionRow,
};

export const flexVerticalCenter: FlexStyle = {
  ...flexContainer,
  ...justifyContentCenter,
};

export const flexHorizontalCenter: FlexStyle = {
  ...flexContainer,
  ...alignItemsCenter,
};

export const flexCenter: FlexStyle = {
  ...flexVerticalCenter,
  ...flexHorizontalCenter,
};

export const flexStyles = StyleSheet.create({
  alignItemsCenter,
  flexCenter,
  flexContainer,
  flexDirectionRow,
  flexGrow,
  flexHorizontalCenter,
  flexRowContainer,
  flexVerticalCenter,
  flexWrap,
  justifyContentCenter,
  justifyContentFlexEnd,
  justifyContentSpaceBetween,
  justifyContentSpaceEvenly,
});
