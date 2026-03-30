import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "flex-start",
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
  },
  buttonLabel: {
    color: "#444",
    fontSize: 14,
  },
  chevron: {
    color: "#555",
    fontSize: 12,
  },
  clearButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  clearText: {
    color: "#888",
    fontSize: 13,
  },
  container: {
    position: "relative",
  },
  input: {
    borderColor: "#e0e0e0",
    borderRadius: 6,
    borderWidth: 1,
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputLabel: {
    color: "#888",
    fontSize: 12,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
  },
  inputWrapper: {
    flex: 1,
  },
  panel: {
    backgroundColor: "#fff",
    borderColor: "#e0e0e0",
    borderRadius: 8,
    borderWidth: 1,
    elevation: 4,
    left: 0,
    padding: 12,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    top: 40,
    width: 240,
  },
});
