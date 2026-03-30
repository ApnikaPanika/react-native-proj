import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./searchInput.styles";

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

export function SearchInput({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔍</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search destinations..."
        placeholderTextColor="#bbb"
        returnKeyType="search"
      />
      {value.length > 0 && (
        <Pressable onPress={() => onChangeText("")} style={styles.clearButton}>
          <Text style={styles.clearIcon}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}
