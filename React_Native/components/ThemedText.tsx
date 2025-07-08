import { Text, TextProps, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
type ThemedTextProps = TextProps & {
  title?: boolean;
};

const ThemedText = ({ style, title = false, ...props }: ThemedTextProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
