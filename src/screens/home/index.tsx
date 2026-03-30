import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SortDropdown, SortOption } from "../../components/sortDropdown";
import { TravelCard } from "../../components/travelCard";
import { items } from "../../data/items";
import { styles } from "./home.styles";

export function Home() {
  const [sortValue, setSortValue] = useState<SortOption>("none");

  const sortedItems =
    sortValue === "none"
      ? items
      : [...items].sort((a, b) =>
          sortValue === "rating_desc"
            ? b.rating - a.rating
            : a.rating - b.rating,
        );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Destinations</Text>
        <Text style={styles.subtitle}>Find your next adventure</Text>
        <SortDropdown value={sortValue} onChange={setSortValue} />
      </View>
      <FlatList
        data={sortedItems}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <TravelCard item={item} />
          </View>
        )}
      />
    </View>
  );
}
