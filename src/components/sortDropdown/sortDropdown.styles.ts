import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#f0f0f0",
    borderColor: "transparent",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonActive: {
    backgroundColor: "#e8f4f1",
    borderColor: "#2a9d8f",
    borderWidth: 1,
  },
  buttonLabel: {
    color: "#444",
    fontSize: 14,
  },
  buttonWrapper: {
    alignItems: "flex-end",
  },
  chevron: {
    color: "#555",
    fontSize: 12,
  },
  container: {
    marginTop: 8,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#e0e0e0",
    borderRadius: 8,
    borderWidth: 1,
    elevation: 4,
    position: "absolute",
    right: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    top: 40,
    width: 200,
  },
  option: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  optionActive: {
    backgroundColor: "#e8f4f1",
  },
  optionText: {
    color: "#444",
    fontSize: 14,
  },
  optionTextActive: {
    color: "#2a9d8f",
    fontWeight: "600",
  },
});
