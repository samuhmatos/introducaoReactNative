import { View, Image, Text, StyleSheet } from "react-native";import { Coffee } from "./data/coffeeList";

export function CoffeeItem({ name, image, description }: Coffee) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 120, height: 120 }} source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={5} style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "black",
  },
});
