import { Pressable, Text, View } from "react-native";
import { styles } from "./sortDropdown.styles";

export type SortOption = "none" | "rating_desc" | "rating_asc";

const OPTIONS: { value: SortOption; label: string }[] = [
  { value: "none", label: "Default order" },
  { value: "rating_desc", label: "Rating: High to Low" },
  { value: "rating_asc", label: "Rating: Low to High" },
];

type Props = {
  value: SortOption;
  isOpen: boolean;
  onToggle: () => void;
  onChange: (value: SortOption) => void;
};

export function SortDropdown({ value, isOpen, onToggle, onChange }: Props) {
  const currentLabel = OPTIONS.find((o) => o.value === value)?.label ?? "";

  function handleSelect(option: SortOption) {
    onChange(option);
    onToggle();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={[styles.button, isOpen && styles.buttonActive]}
          onPress={onToggle}
        >
          <Text style={styles.buttonLabel}>{currentLabel}</Text>
          <Text style={styles.chevron}>{isOpen ? "▲" : "▼"}</Text>
        </Pressable>
      </View>

      {isOpen && (
        <View style={styles.dropdown}>
          {OPTIONS.map((option) => (
            <Pressable
              key={option.value}
              style={[
                styles.option,
                option.value === value && styles.optionActive,
              ]}
              onPress={() => handleSelect(option.value)}
            >
              <Text
                style={[
                  styles.optionText,
                  option.value === value && styles.optionTextActive,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
