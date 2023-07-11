import {
  Alert,
  Button,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export default function App() {
  function changeName(text: string) {
    console.log(text);
  }

  function onPressButton() {
    console.log("Pressionou o botão");
    Alert.alert("Meu primeiro App", Platform.OS);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Profissional React Native
      </Text>
      <TextInput
        value={"Rafael"}
        autoCapitalize="none"
        multiline
        placeholder="Digite seu nome"
        // onChange={(e) => console.log(e.nativeEvent.text)}

        //Callback that is called when the text input's text changes.
        // Changed text is passed as an argument to the callback handler.
        // ((text: string) => void) | undefined
        // onChangeText={(text) => console.log(text)}}
        onChangeText={changeName}
        placeholderTextColor="#ddd"
        style={{
          borderWidth: 1,
          height: 50,
          width: 250,
          marginTop: 10,
          paddingHorizontal: 10,
          color: "#550ab1",
          fontWeight: "bold",
          fontSize: 18,
        }}
      />

      <Button color={"#550ab1"} title="Enviar" onPress={onPressButton} />

      <TouchableHighlight
        onPressIn={() => console.log("onPressIn")}
        underlayColor={"#550ab1"}
        onPress={() => console.log("Highlight")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Highlight</Text>
      </TouchableHighlight>

      <TouchableOpacity
        onPressOut={() => console.log("onPressOut")}
        activeOpacity={0.7}
        onPress={() => console.log("Opacity")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Opacity</Text>
      </TouchableOpacity>

      <Pressable
        delayLongPress={1000}
        onLongPress={() => console.log("onLongPress")}
        onPress={() => console.log("Pressble")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Pressble</Text>
      </Pressable>
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
  button: {
    height: 50,
    width: 200,
    backgroundColor: "#550ab1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
