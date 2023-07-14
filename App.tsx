import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: 100, height: 100, backgroundColor: "tomato" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "gold" }} />
      <View
        style={{ width: 100, height: 100, backgroundColor: "dodgerblue" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeee",
    flex: 1,
  },
});
