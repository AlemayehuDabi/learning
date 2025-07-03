import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>The Number 1</Text>
      <Text
        style={{
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        Reading List App
      </Text>

      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "#eee",
    boxShadow: "4px  rgba(0,0,0,0.1)",
    padding: 10,
  },
});
