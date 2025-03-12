import { StyleSheet } from "react-native";

export const ProjectDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  noSectionsText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
  descriptionText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  refreshButton: {
    borderWidth: 1,
    borderColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  refreshButtonText: {
    color: "green",
    fontSize: 16,
  },
  newSectionButton: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  newSectionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});