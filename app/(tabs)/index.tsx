import { createHomeStyles } from '@/assets/styles/Home.styles';
import { useTheme } from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const HomeStyle = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={[HomeStyle.container]}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={[HomeStyle.safeArea]}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>hello</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
