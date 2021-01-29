import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Screen from '../Screen';
import {Colors, Layout, Styles, Fonts, SCREEN_KEYS} from '@app/constants';
import {FlexVerticalCenter, CircleNextButton} from '@app/components';
import {Form, Input, Item, Toast} from 'native-base';

export default function FleetCodeScreen(props) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const onPress = () => {
    if (!code) {
      Toast.show({text: "Fleet code can't be empty.", type: 'danger'});
      return setError(true);
    }
    props.navigation.navigate(SCREEN_KEYS.PHONE_NUMBER);
  };
  const onChangeText = (text) => {
    setError(!text);
    setCode(text);
  };
  return (
    <Screen>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Layout.isIOS && 'padding'}>
          <FlexVerticalCenter>
            <Form>
              <Item error={!!error}>
                <Input
                  value={code}
                  onChangeText={onChangeText}
                  error={Colors.danger}
                  style={{color: Colors.white}}
                  placeholder={'Enter your fleet code'}
                  clearButtonMode={'always'}
                  returnKeyType={'go'}
                  onSubmitEditing={onPress}
                />
              </Item>
              <CircleNextButton onPress={onPress} />
            </Form>
          </FlexVerticalCenter>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
