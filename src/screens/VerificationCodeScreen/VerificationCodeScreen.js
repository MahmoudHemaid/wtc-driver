import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts} from '@app/constants';
import {StyledText, VerificationCodeInput} from '@app/components';
import {useCountdown} from '@app/hooks';
import {Context} from '@app/utils';

export default function VerificationCodeScreen(props) {
  const context = useContext(Context);
  const {phone = {}} = props.route.params || {};
  const [code, setCode] = useState('');
  const [countdown, resetCountdown] = useCountdown(30);
  const onResendPress = () => {
    resetCountdown();
    setCode('');
  };
  const onSubmit = () => {
    context.signIn();
  };

  const fullNumber = `+${phone.callingCode} ${phone.number}`;

  return (
    <Screen safe style={styles.container}>
      <StyledText center children={'Enter the code sent to'} />
      <StyledText
        center
        children={fullNumber}
        size={Fonts.size.xLarge}
        style={styles.number}
      />
      <VerificationCodeInput
        onSubmit={onSubmit}
        value={code}
        setValue={setCode}
      />
      <TouchableOpacity
        disabled={!!countdown}
        onPress={onResendPress}
        style={[styles.resendButton, !countdown && styles.activeButton]}>
        <If condition={!!countdown}>
          <StyledText children={`${countdown}`} />
          <View style={styles.separatorLine} />
        </If>
        <StyledText
          children={'Resend code'}
          color={countdown ? undefined : Colors.secondaryColor}
        />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  number: {
    marginVertical: Layout.margin.normal,
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: Layout.padding.small,
    paddingVertical: Layout.padding.medium,
    borderRadius: Layout.radius.large,
    borderWidth: 2,
    borderColor: Colors.lightColor,
    marginVertical: Layout.margin.xLarge,
  },
  separatorLine: {
    width: 2,
    marginHorizontal: Layout.margin.small,
    backgroundColor: Colors.lightColor,
    height: '100%',
  },
  activeButton: {
    borderColor: Colors.secondaryColor,
  },
});
