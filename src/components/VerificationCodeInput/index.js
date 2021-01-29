import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Layout, Styles, Fonts, Colors, Shadow} from '@app/constants';
import PropTypes from 'prop-types';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  codeFieldRoot: {
    flexDirection: 'row',
  },
  cell: {
    width: 64,
    height: 64,
    lineHeight: 62,
    fontSize: 24,
    overflow: 'hidden',
    textAlign: 'center',
    color: Colors.white,
  },
  focusCell: {},
});

const CELL_COUNT = 4;

export default function VerificationCodeInput(props) {
  const {value, setValue, disabled} = props;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [codeProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onEndEditing = () => {
    if (value.length != CELL_COUNT) return;
    props.onSubmit();
  };

  return (
    <CodeField
      ref={ref}
      {...codeProps}
      value={value}
      autoFocus={true}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      onEndEditing={onEndEditing}
      editable={!disabled}
      renderCell={({index, symbol, isFocused}) => (
        <View key={index} onLayout={getCellOnLayoutHandler(index)}>
          <Text style={[styles.cell, isFocused && styles.focusCell]}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: isFocused ? Colors.white : Colors.lightColor,
            }}
          />
        </View>
      )}
    />
  );
}

// PropTypes.oneOf([true, false, undefined])
VerificationCodeInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  onSubmit: PropTypes.func,
  disabled: PropTypes.oneOf([true, false, undefined]),
};

VerificationCodeInput.defaultProps = {
  value: '',
  setValue: () => {},
  onSubmit: () => {},
  disabled: false,
};
