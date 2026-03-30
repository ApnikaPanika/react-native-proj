import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 12,
  },
  controls: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    overflow: "visible",
  },
  header: {
    marginBottom: 16,
    overflow: "visible",
    paddingHorizontal: 6,
    paddingTop: 12,
    zIndex: 10,
  },
  list: {
    paddingHorizontal: 6,
  },
  screen: {
    flex: 1,
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    marginTop: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
