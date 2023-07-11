import { StyleSheet, Text, View, ViewStyle } from "react-native";

import { Button } from "./src/components/Button";
import { TextInput } from "./src/components/TextInput";
import { useState } from "react";

export default function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "samuh@gmail.com",
    address: {
      country: "Brazil",
      city: "Brazilia",
    },
  });

  function updateFirst(text: string) {
    setFormValues({
      ...formValues,
      firstName: text,
    });
  }

  function updateLast(text: string) {
    setFormValues({
      ...formValues,
      lastName: text,
    });
  }

  function updateCity(text: string) {
    setFormValues({
      ...formValues,
      address: {
        ...formValues.address,
        city: text,
      },
    });
  }

  return (
    <View style={styles.container}>
      <TextInput value={formValues.firstName} onChangeText={updateFirst} />
      <TextInput value={formValues.lastName} onChangeText={updateLast} />
      <TextInput value={formValues.address.city} onChangeText={updateCity} />

      <Text>{`${formValues.firstName} ${formValues.lastName}:\n${formValues.email} \n ${formValues.address.city} - ${formValues.address.country}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
