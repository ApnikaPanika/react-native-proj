import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    marginBottom: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  description: {
    color: "#444",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  destination: {
    fontSize: 18,
    fontWeight: "bold",
  },
  difficulty: {
    color: "#888",
    fontSize: 13,
    textTransform: "capitalize",
  },
  duration: {
    color: "#888",
    fontSize: 13,
  },
  footer: {
    flexDirection: "row",
    gap: 12,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  location: {
    color: "#888",
    fontSize: 13,
    marginBottom: 8,
  },
  price: {
    color: "#2a9d8f",
    fontSize: 13,
    fontWeight: "600",
  },
  rating: {
    color: "#f5a623",
    fontSize: 14,
  },
});
