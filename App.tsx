import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.styles';
import { Home } from './src/screens/home';

// eslint-disable-next-line no-restricted-syntax
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
