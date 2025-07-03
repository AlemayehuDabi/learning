import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Contact() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Contact</Text>
      <Link href="/">Back Home</Link>
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
});
