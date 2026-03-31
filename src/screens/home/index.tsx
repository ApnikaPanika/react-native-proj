import { useCallback, useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { ExtendedFilters } from "../../components/extendedFilters";
import { PriceFilter } from "../../components/priceFilter";
import { SearchInput } from "../../components/searchInput";
import { SortDropdown, SortOption } from "../../components/sortDropdown";
import { TravelCard } from "../../components/travelCard";
import { items } from "../../data/items";
import { Climate, Continent, Season } from "../../data/filters";
import { styles } from "./home.styles";

export function Home() {
  const [sortValue, setSortValue] = useState<SortOption>("none");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedClimates, setSelectedClimates] = useState<Climate[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<Season[]>([]);
  const [selectedContinents, setSelectedContinents] = useState<Continent[]>([]);

  const isAnyOpen = isPriceOpen || isSortOpen;

  const togglePrice = useCallback(() => {
    setIsPriceOpen((prev) => !prev);
    setIsSortOpen(false);
  }, []);

  const toggleSort = useCallback(() => {
    setIsSortOpen((prev) => !prev);
    setIsPriceOpen(false);
  }, []);

  const toggleClimate = useCallback((climate: Climate) => {
    setSelectedClimates((prev) =>
      prev.includes(climate)
        ? prev.filter((c) => c !== climate)
        : [...prev, climate],
    );
  }, []);

  const toggleSeason = useCallback((season: Season) => {
    setSelectedSeasons((prev) =>
      prev.includes(season)
        ? prev.filter((s) => s !== season)
        : [...prev, season],
    );
  }, []);

  const toggleContinent = useCallback((continent: Continent) => {
    setSelectedContinents((prev) =>
      prev.includes(continent)
        ? prev.filter((c) => c !== continent)
        : [...prev, continent],
    );
  }, []);

  const sortedItems = useMemo(
    () =>
      sortValue === "none"
        ? items
        : [...items].sort((a, b) =>
            sortValue === "rating_desc"
              ? b.rating - a.rating
              : a.rating - b.rating,
          ),
    [sortValue],
  );

  const displayItems = useMemo(
    () =>
      sortedItems.filter((item) => {
        const from = Number(priceFrom);
        const to = Number(priceTo);
        if (priceFrom && item.price < from) return false;
        if (priceTo && item.price > to) return false;
        if (
          searchQuery.trim() &&
          !item.destination.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !item.country.toLowerCase().includes(searchQuery.toLowerCase())
        )
          return false;
        if (selectedClimates.length > 0 && !selectedClimates.includes(item.climate))
          return false;
        if (
          selectedSeasons.length > 0 &&
          !item.bestSeason.some((s) => selectedSeasons.includes(s))
        )
          return false;
        if (
          selectedContinents.length > 0 &&
          !selectedContinents.includes(item.continent)
        )
          return false;
        return true;
      }),
    [sortedItems, priceFrom, priceTo, searchQuery, selectedClimates, selectedSeasons, selectedContinents],
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Destinations</Text>
        <Text style={styles.subtitle}>Find your next adventure</Text>
        <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
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

      <ExtendedFilters
        selectedClimates={selectedClimates}
        selectedSeasons={selectedSeasons}
        selectedContinents={selectedContinents}
        onClimateToggle={toggleClimate}
        onSeasonToggle={toggleSeason}
        onContinentToggle={toggleContinent}
      />
    </View>
  );
}
