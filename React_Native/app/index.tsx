import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import ThemedLogo from '../components/ThemedLogo';
import { ThemedView } from '../components/ThemedView';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.Container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>
      <Spacer width={10} height={30} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "white",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#eee',
    boxShadow: '4px  rgba(0,0,0,0.1)',
    padding: 10,
  },
});
