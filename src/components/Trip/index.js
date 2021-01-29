import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Styles, Fonts, Colors, Shadow} from '@app/constants';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';
import dayjs from 'dayjs';
import {pure} from 'recompose';
const styles = StyleSheet.create({
  container: {
    ...Shadow.tiny,
    backgroundColor: Colors.lightColor,
    borderRadius: Layout.radius.large,
    margin: Layout.margin.tiny,
    padding: Layout.padding.normal,
  },
});

function Trip(props) {
  const {item, onTripPress} = props;
  const {id, date, address} = item;
  const formatedDate = useMemo(() => dayjs(date).format('MMM D, HH:mm'), [
    date,
  ]);
  const onPress = () => onTripPress(item);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      key={id}
      style={styles.container}>
      <StyledText children={'#' + id.substring(0, 6)} />
      <StyledText
        children={'Confirmed reservation'}
        style={{marginVertical: Layout.margin.small}}
      />
      <StyledText
        color={Colors.white}
        children={address}
        numberOfLines={1}
        style={{marginVertical: Layout.margin.small}}
      />
      <StyledText children={formatedDate} />
    </TouchableOpacity>
  );
}

export default pure(Trip);

// PropTypes.oneOf([true, false, undefined])
Trip.propTypes = {
  item: PropTypes.object,
  onTripPress: PropTypes.func,
};

Trip.defaultProps = {
  item: {},
  onTripPress: (trip) => {},
};
