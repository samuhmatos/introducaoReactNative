import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { Button } from "./src/components/Button";
import { TextInput } from "./src/components/TextInput";
import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function addItem() {
    setList((prev) => [...prev, text]);
  }

  function removeItem(text: string) {
    setList((prev) => prev.filter((item) => item !== text));
  }

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.input}></View>
        <TextInput value={text} onChangeText={setText} />
        <Button
          title="+"
          style={{ width: 50, marginLeft: 10 }}
          onPress={addItem}
        />
      </View>

      {list.map((item) => (
        <View key={item} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeItem(item)}
          >
            <Text style={styles.textRemove}>x</Text>
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {},
  text: {},
  removeButton: {},
  item: {},
  textRemove: {},
});
