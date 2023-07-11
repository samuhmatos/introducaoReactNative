import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { Button } from "./src/components/Button";
import { TextInput } from "./src/components/TextInput";

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
        autoCapitalize="none"
        placeholder="Digite seu nome"
        onChangeText={changeName}
      />

      <TextInput
        autoCapitalize="none"
        secureTextEntry
        placeholder="Digite sua senha"
        onChangeText={changeName}
      />

      <Button
        title="Entrar"
        onPress={() => console.log("entrar")}
        style={{ marginTop: 20 }}
      />
      <Button
        title="Criar conta"
        variant="secondary"
        onPress={() => console.log("cadastrar")}
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
