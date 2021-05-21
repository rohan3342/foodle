import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/rsestaurant-info-card-component";

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchView}>
      <Searchbar />
    </View>
    <View style={styles.listView}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchView: {
    padding: 15,
    backgroundColor: "lightgreen",
    alignItems: "center",
  },
  listView: {
    flex: 1,
    padding: 15,
    backgroundColor: "steelblue",
  },
});
