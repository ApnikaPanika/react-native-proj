import { useCallback, useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExtendedFilters } from "../../components/extendedFilters";
import { PriceFilter } from "../../components/priceFilter";
import { SearchInput } from "../../components/searchInput";
import { SortDropdown, SortOption } from "../../components/sortDropdown";
import { TravelCard } from "../../components/travelCard";
import { items } from "../../data/items";
import { Climate, Continent, Season } from "../../data/filters";
import { useDebounce } from "../../hooks/useDebounce";
import { styles } from "./home.styles";

const FILTER_BUTTON_CLEARANCE = 28 + 52 + 12; // bottom offset + button height + gap

export function Home() {
  const insets = useSafeAreaInsets();
  const [sortValue, setSortValue] = useState<SortOption>("none");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedClimates, setSelectedClimates] = useState<Climate[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<Season[]>([]);
  const [selectedContinents, setSelectedContinents] = useState<Continent[]>([]);

  const debouncedSearchQuery = useDebounce(searchQuery);

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

  const displayItems = useMemo(() => {
    const from = Number(priceFrom);
    const to = Number(priceTo);
    const lowerQuery = debouncedSearchQuery.toLowerCase().trim();
    const climateSet = new Set(selectedClimates);
    const seasonSet = new Set(selectedSeasons);
    const continentSet = new Set(selectedContinents);

    return sortedItems.filter((item) => {
      if (priceFrom && item.price < from) return false;
      if (priceTo && item.price > to) return false;
      if (
        lowerQuery &&
        !item.destination.toLowerCase().includes(lowerQuery) &&
        !item.country.toLowerCase().includes(lowerQuery)
      )
        return false;
      if (climateSet.size > 0 && !climateSet.has(item.climate)) return false;
      if (seasonSet.size > 0 && !item.bestSeason.some((s) => seasonSet.has(s)))
        return false;
      if (continentSet.size > 0 && !continentSet.has(item.continent))
        return false;
      return true;
    });
  }, [
    sortedItems,
    priceFrom,
    priceTo,
    debouncedSearchQuery,
    selectedClimates,
    selectedSeasons,
    selectedContinents,
  ]);

  const renderItem = useCallback(
    ({ item }: { item: (typeof displayItems)[0] }) => (
      <View style={styles.cardWrapper}>
        <TravelCard item={item} />
      </View>
    ),
    [],
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
        contentContainerStyle={[
          styles.list,
          { paddingBottom: insets.bottom + FILTER_BUTTON_CLEARANCE },
        ]}
        renderItem={renderItem}
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
