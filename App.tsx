import {
  ActivityIndicator,
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

async function getListFromApi(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["item1", "item2", "item3"]);
    }, 2000);
  });
}

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getList() {
    try {
      const values = await getListFromApi();
      setList(values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getList();
  }, []);

  function addItem() {
    setList((prev) => [...prev, text]);
  }

  function removeItem(text: string) {
    setList((prev) => prev.filter((item) => item !== text));
  }

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
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#550ab1"
          style={{ marginTop: 50 }}
        />
      ) : (
        list.map((item) => (
          <View key={item} style={styles.item}>
            <Text style={styles.text}>{item}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeItem(item)}
            >
              <Text style={styles.textRemove}>x</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
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
