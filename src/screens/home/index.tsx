import { FlatList, Text, View } from "react-native";
import { TravelCard } from "../../components/travelCard";
import { items } from "../../data/items";
import { styles } from "./home.styles";

export function Home() {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Explore Destinations</Text>
          <Text style={styles.subtitle}>Find your next adventure</Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.cardWrapper}>
          <TravelCard item={item} />
        </View>
      )}
    />
  );
}
