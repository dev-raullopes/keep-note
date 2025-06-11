import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    overflow: "hidden",
    maxHeight: 60, // Limit the height of the description
  },
});
