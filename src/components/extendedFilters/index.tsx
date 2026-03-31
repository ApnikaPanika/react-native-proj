import { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import {
  Climate,
  Climates,
  Continent,
  Continents,
  Season,
  Seasons,
} from "../../data/filters";
import { styles } from "./extendedFilters.styles";

type Props = {
  selectedClimates: Climate[];
  selectedSeasons: Season[];
  selectedContinents: Continent[];
  onClimateToggle: (climate: Climate) => void;
  onSeasonToggle: (season: Season) => void;
  onContinentToggle: (continent: Continent) => void;
};

export function ExtendedFilters({
  selectedClimates,
  selectedSeasons,
  selectedContinents,
  onClimateToggle,
  onSeasonToggle,
  onContinentToggle,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const activeCount =
    selectedClimates.length +
    selectedSeasons.length +
    selectedContinents.length;

  function renderChips<T extends string>(
    options: readonly T[],
    selected: T[],
    onToggle: (val: T) => void,
  ) {
    return options.map((option) => {
      const isSelected = selected.includes(option);
      return (
        <Pressable
          key={option}
          style={[styles.chip, isSelected && styles.chipSelected]}
          onPress={() => onToggle(option)}
        >
          <Text
            style={[styles.chipText, isSelected && styles.chipTextSelected]}
          >
            {option}
          </Text>
        </Pressable>
      );
    });
  }

  return (
    <>
      <Pressable style={styles.button} onPress={() => setIsVisible(true)}>
        <Text style={styles.buttonIcon}>⚙</Text>
        {activeCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{activeCount}</Text>
          </View>
        )}
      </Pressable>

      <Modal
        visible={isVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
        >
          <Pressable style={styles.modalContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.sectionLabel}>Climate</Text>
              <View style={styles.optionRow}>
                {renderChips(Climates, selectedClimates, onClimateToggle)}
              </View>

              <Text style={styles.sectionLabel}>Best Season</Text>
              <View style={styles.optionRow}>
                {renderChips(Seasons, selectedSeasons, onSeasonToggle)}
              </View>

              <Text style={styles.sectionLabel}>Continent</Text>
              <View style={styles.optionRow}>
                {renderChips(Continents, selectedContinents, onContinentToggle)}
              </View>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
