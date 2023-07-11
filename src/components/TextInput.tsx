import React from "react";import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";

interface Props extends TextInputProps {}
export function TextInput(props: Props) {
  return (
    <RNTextInput
      placeholderTextColor="#ddd"
      style={styles.textInput}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    width: 250,
    marginTop: 10,
    paddingHorizontal: 10,
    color: "#550ab1",
    fontWeight: "bold",
    fontSize: 18,
  },
});
