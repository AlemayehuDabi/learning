import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

export function ThemedView({ style, ...otherProps }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...otherProps}
    />
  );
}
