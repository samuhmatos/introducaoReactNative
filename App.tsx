import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
          flexShrink: 1,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
          flexShrink: 1,
          // flexBasis:150,
          // flex:1,
          // flexGrow:1
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          flexShrink: 1,
          // flexGrow:1
        }}
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "limegreen",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeee",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    gap: 20,
  },
});
