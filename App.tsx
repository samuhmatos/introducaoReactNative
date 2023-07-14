import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { Button } from "./src/components/Button";
import { TextInput } from "./src/components/TextInput";
import { useEffect, useState } from "react";
import { coffeeList } from "./src/CoffeList/data/coffeeList";
import { CoffeeItem } from "./src/CoffeList/CoffeeItem";

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

  return (
    <View style={styles.container}>
      <ScrollView
        // bounces={false}
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
        // style={{ paddingHorizontal: 10, backgroundColor: "red" }}
        // contentContainerStyle={{
        //   paddingHorizontal: 10,
        //   backgroundColor: "blue",
        // }}

        //contentOffset={{ y: 300 }}
        onScroll={({ nativeEvent }) => console.log(nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}
      >
        {coffeeList.map((item, index) => (
          <CoffeeItem {...item} key={item.name} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
