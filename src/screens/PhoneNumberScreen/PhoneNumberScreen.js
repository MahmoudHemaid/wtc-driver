import React, {useState, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts, SCREEN_KEYS} from '@app/constants';
import {
  CircleNextButton,
  StyledText,
  Checkbox,
  PhoneInput,
} from '@app/components';
import {useRegex} from '@app/hooks';
import {Toast} from 'native-base';

export default function PhoneNumberScreen(props) {
  const regex = useRegex();
  const [checked, setChecked] = useState(true);
  const [phone, setPhone] = useState({
    callingCode: '966',
    cca2: 'SA',
    number: '',
  });
  const toggle = () => {
    setChecked((prev) => !prev);
  };
  const disabled = useMemo(() => !checked || !phone?.number, [phone, checked]);

  const onTermsPress = () => {};
  const onPrivacyPress = () => {};
  const onPress = () => {
    if (!regex.phone(phone.number)) {
      return Toast.show({text: 'Invalid phone number', type: 'danger'});
    }
    props.navigation.navigate(SCREEN_KEYS.VERIFICATION_CODE, {phone});
  };
  return (
    <Screen safe style={styles.container}>
      <StyledText children={"What's your number?"} />
      <PhoneInput phone={phone} onChange={setPhone} />
      <Checkbox
        containerStyle={styles.checkboxContainer}
        onPress={toggle}
        checked={checked}
        children={'I agree to the'}
      />
      <StyledText center>
        <StyledText
          onPress={onTermsPress}
          color={Colors.secondaryColor}
          children={'Terms(s) of Use'}
        />
        {' and '}
        <StyledText
          onPress={onPrivacyPress}
          color={Colors.secondaryColor}
          children={'Privacy Policy'}
        />
      </StyledText>
      <CircleNextButton
        onPress={onPress}
        disabled={disabled}
        color={disabled ? Colors.lightColor : Colors.secondaryColor}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  checkboxContainer: {
    alignSelf: 'center',
    marginBottom: Layout.margin.small,
    marginTop: Layout.margin.normal,
  },
});
