import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          lineHeight: 40,
          backgroundColor: "red",
          fontSize: 25,
          textAlign: "center",
        }}
      >
        Open up App.js to start working on your app!
      </Text>
      <Text> Profissional React Native</Text>
      <StatusBar style="auto" />
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
