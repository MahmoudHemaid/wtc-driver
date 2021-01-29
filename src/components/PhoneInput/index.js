import React from 'react';
import {
  View,
  StyleSheet,
  ViewPropTypes,
  TextInput,
  I18nManager,
} from 'react-native';
import {Layout, Styles, Fonts, Colors} from '@app/constants';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal'; // Removed

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: Layout.radius.large,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.padding.medium,
    borderBottomWidth: 1,
    borderColor: Colors.lightColor,
  },
  input: {
    flex: 1,
    letterSpacing: 1,
    marginHorizontal: Layout.margin.normal,
    fontSize: Fonts.size.normal,
    color: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.lightColor,
  },
});

function PhoneInput(props) {
  const {phone, onChange} = props;
  const onCountrySelect = (country) => {
    const {callingCode, cca2} = country;
    onChange({
      ...phone,
      callingCode: callingCode[0],
      cca2,
    });
  };

  const onChangeText = (number) => {
    onChange({
      ...phone,
      number,
    });
  };

  return (
    <View style={props.containerStyle}>
      <StyledText color={Colors.danger} children={props.error} />

      <View
        style={[
          styles.container,
          props.style,
          props.error && {borderColor: Colors.danger},
        ]}>
        <CountryPicker
          onSelect={onCountrySelect}
          visible={false}
          withEmoji
          withFlag
          withFilter
          withCallingCode
          withCallingCodeButton
          countryCode={phone.cca2}
          withAlphaFilter={!I18nManager.isRTL}
          containerButtonStyle={styles.buttonContainer}
          theme={DARK_THEME}
        />
        <TextInput
          style={styles.input}
          placeholder={'Enter your mobile number'}
          keyboardType={'number-pad'}
          textContentType={'telephoneNumber'}
          autoCompleteType={'tel'}
          placeholderTextColor={Colors.lightColor}
          value={phone.number}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

export default PhoneInput;

// PropTypes.oneOf([true, false, undefined])
PhoneInput.propTypes = {
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  onChange: PropTypes.func,
  phone: PropTypes.object,
  error: PropTypes.string,
};

PhoneInput.defaultProps = {
  style: {},
  containerStyle: {},
  onChange: () => {},
  phone: {
    callingCode: '966',
    cca2: 'SA',
    number: '',
  },
  error: '',
};
