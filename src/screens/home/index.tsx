import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
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
  const [isSortOpen, setIsSortOpen] = useState(false);

  const isAnyOpen = isPriceOpen || isSortOpen;

  function togglePrice() {
    setIsPriceOpen((prev) => !prev);
    setIsSortOpen(false);
  }

  function toggleSort() {
    setIsSortOpen((prev) => !prev);
    setIsPriceOpen(false);
  }

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
            onToggle={togglePrice}
            onFromChange={setPriceFrom}
            onToChange={setPriceTo}
          />
          <SortDropdown
            value={sortValue}
            isOpen={isSortOpen}
            onToggle={toggleSort}
            onChange={setSortValue}
          />
        </View>
      </View>

      {isAnyOpen && (
        <Pressable
          style={styles.backdrop}
          onPress={() => {
            setIsPriceOpen(false);
            setIsSortOpen(false);
          }}
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
