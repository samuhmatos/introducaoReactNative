import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "tomato", flex: 2 }} />
      <View style={{ backgroundColor: "gold", flex: 2 }} />
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeee",
    flex: 1,
    flexDirection: "column",
  },
});
