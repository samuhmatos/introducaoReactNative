import React from "react";import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
  //onPress?: () => void;
}
export function Button({
  title,
  variant = "primary",
  onPress,
  style,
  ...rest
}: ButtonProps) {
  const variantStyles =
    variant === "primary" ? styles.wrapperPrimary : styles.wrapperSecondary;
  const textColor = variant === "primary" ? "#fff" : "#550ab1";

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.wrapperCommon, variantStyles, style]}
      {...rest}
    >
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapperCommon: {
    height: 50,
    width: 200,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperPrimary: {
    backgroundColor: "#550ab1",
  },
  wrapperSecondary: {
    borderColor: "#550ab1",
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
