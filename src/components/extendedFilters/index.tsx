import { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import { Climates, Seasons } from "../../data/filters";
import { Climate, Season } from "../../types/item";
import { styles } from "./extendedFilters.styles";

type Props = {
  selectedClimates: Climate[];
  selectedSeasons: Season[];
  onClimateToggle: (climate: Climate) => void;
  onSeasonToggle: (season: Season) => void;
};

export function ExtendedFilters({
  selectedClimates,
  selectedSeasons,
  onClimateToggle,
  onSeasonToggle,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const activeCount = selectedClimates.length + selectedSeasons.length;

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
                {Climates.map((climate) => {
                  const isSelected = selectedClimates.includes(climate);
                  return (
                    <Pressable
                      key={climate}
                      style={[styles.chip, isSelected && styles.chipSelected]}
                      onPress={() => onClimateToggle(climate)}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          isSelected && styles.chipTextSelected,
                        ]}
                      >
                        {climate}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              <Text style={styles.sectionLabel}>Best Season</Text>
              <View style={styles.optionRow}>
                {Seasons.map((season) => {
                  const isSelected = selectedSeasons.includes(season);
                  return (
                    <Pressable
                      key={season}
                      style={[styles.chip, isSelected && styles.chipSelected]}
                      onPress={() => onSeasonToggle(season)}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          isSelected && styles.chipTextSelected,
                        ]}
                      >
                        {season}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
