import { memo } from "react";
import { View, Text } from "react-native";
import type { TravelItem } from "../../types/item";
import { styles } from "./travelCard.styles";

type Props = {
  item: TravelItem;
};

export const TravelCard = memo(function TravelCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.destination}>{item.destination}</Text>
        <Text style={styles.rating}>★ {item.rating}</Text>
      </View>
      <Text style={styles.location}>
        {item.country} · {item.continent}
      </Text>
      <View style={styles.tags}>
        <Text style={styles.tag}>{item.category}</Text>
        <Text style={styles.tag}>{item.climate}</Text>
      </View>
      <View style={styles.seasons}>
        {item.bestSeason.map((season) => (
          <Text key={season} style={styles.seasonTag}>
            {season}
          </Text>
        ))}
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>${item.price} / person</Text>
        <Text style={styles.duration}>{item.duration} days</Text>
        <Text style={styles.difficulty}>{item.difficulty}</Text>
      </View>
    </View>
  );
});
