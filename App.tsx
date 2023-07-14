import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
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
import { Coffee, coffeeList } from "./src/CoffeList/data/coffeeList";
import { CoffeeItem } from "./src/CoffeList/CoffeeItem";
import { CoffeeHeader } from "./src/CoffeList/CoffeeHeader";
import { SeparatorItem } from "./src/CoffeList/SeparatorItem";

async function getListFromApi(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["item1", "item2", "item3"]);
    }, 2000);
  });
}

export default function App() {
  function renderItem({ item }: ListRenderItemInfo<Coffee>) {
    return <CoffeeItem {...item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={CoffeeHeader}
        ItemSeparatorComponent={SeparatorItem}
        data={coffeeList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name}
        //windowSize={3}
        //initialNumToRender={20}
      />
      {/* <ScrollView
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
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
