import { StyleSheet, Text, View, ViewStyle } from "react-native";

import { Button } from "./src/components/Button";
import { TextInput } from "./src/components/TextInput";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [showCount, setShowCount] = useState(true);

  function increment() {
    setCount((prevState) => prevState + 1);
    console.log(count);
  }

  function decrement() {
    setCount((prevState) => prevState - 1);
    console.log(count);
  }

  function toggleCount() {
    setShowCount((prevState) => !prevState);
    console.log(showCount);
  }

  return (
    <View style={styles.container}>
      {showCount && (
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{count}</Text>
      )}

      <Button title="+ 1" onPress={increment} style={{ marginTop: 20 }} />
      <Button title="- 1" onPress={decrement} style={{ marginTop: 10 }} />

      <Button
        title="show"
        variant="secondary"
        onPress={toggleCount}
        style={{ marginTop: 10 }}
      />
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
