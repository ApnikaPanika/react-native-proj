import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { PriceFilter } from "../../components/priceFilter";
import { SortDropdown, SortOption } from "../../components/sortDropdown";
import { TravelCard } from "../../components/travelCard";
import { items } from "../../data/items";
import { styles } from "./home.styles";

export function Home() {
  const [sortValue, setSortValue] = useState<SortOption>("none");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const sortedItems =
    sortValue === "none"
      ? items
      : [...items].sort((a, b) =>
          sortValue === "rating_desc"
            ? b.rating - a.rating
            : a.rating - b.rating,
        );

  const displayItems = sortedItems.filter((item) => {
    const from = Number(priceFrom);
    const to = Number(priceTo);
    if (priceFrom && item.price < from) return false;
    if (priceTo && item.price > to) return false;
    return true;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Destinations</Text>
        <Text style={styles.subtitle}>Find your next adventure</Text>
        <View style={styles.controls}>
          <PriceFilter
            from={priceFrom}
            to={priceTo}
            isOpen={isPriceOpen}
            onToggle={() => setIsPriceOpen((prev) => !prev)}
            onFromChange={setPriceFrom}
            onToChange={setPriceTo}
          />
          <SortDropdown value={sortValue} onChange={setSortValue} />
        </View>
      </View>

      {isPriceOpen && (
        <Pressable
          style={StyleSheet.absoluteFillObject}
          onPress={() => setIsPriceOpen(false)}
        />
      )}

      <FlatList
        data={displayItems}
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
