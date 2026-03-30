import { View, Text } from "react-native";
import { styles } from "./home.styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>
      <Text style={styles.subtitle}>Find your next adventure</Text>
    </View>
  );
}
