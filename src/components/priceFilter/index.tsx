import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./priceFilter.styles";

type Props = {
  from: string;
  to: string;
  isOpen: boolean;
  onToggle: () => void;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
};

export function PriceFilter({
  from,
  to,
  isOpen,
  onToggle,
  onFromChange,
  onToChange,
}: Props) {
  const isActive = from.length > 0 || to.length > 0;

  function getLabel() {
    if (from && to) return `$${from} – $${to}`;
    if (from) return `From $${from}`;
    if (to) return `Up to $${to}`;
    return "Price";
  }

  function handleClear() {
    onFromChange("");
    onToChange("");
    onToggle();
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, isActive && styles.buttonActive]}
        onPress={onToggle}
      >
        <Text style={styles.buttonLabel}>{getLabel()}</Text>
        <Text style={styles.chevron}>{isOpen ? "▲" : "▼"}</Text>
      </Pressable>

      {isOpen && (
        <View style={styles.panel}>
          <View style={styles.inputRow}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>From $</Text>
              <TextInput
                style={styles.input}
                value={from}
                onChangeText={onFromChange}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#bbb"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>To $</Text>
              <TextInput
                style={styles.input}
                value={to}
                onChangeText={onToChange}
                keyboardType="numeric"
                placeholder="5000"
                placeholderTextColor="#bbb"
              />
            </View>
          </View>
          {isActive && (
            <Pressable style={styles.clearButton} onPress={handleClear}>
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}
