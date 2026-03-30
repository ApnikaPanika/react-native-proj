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
  seasonTag: {
    backgroundColor: "#e8f4f1",
    borderRadius: 4,
    color: "#2a9d8f",
    fontSize: 11,
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 3,
    textTransform: "capitalize",
  },
  seasons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    color: "#555",
    fontSize: 11,
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 3,
    textTransform: "capitalize",
  },
  tags: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 6,
  },
});
