import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Platform } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const styles = StyleSheet.create({
  cell: {
    width: 40,
    height: 50,
    marginHorizontal: 0,
    lineHeight: 45,
    borderRadius: 100,
    fontFamily: "Medium",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "rgba(125, 146, 175, 0.2)",
    textAlign: "center",
    borderColor: "#D9D9D9",
  },
  focusCell: {
    borderColor: "#49A9E1",
  },
});

const CELL_COUNT = 6;

const Codefield = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: "sms-otp",
          default: "one-time-code",
        })}
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Codefield;
