import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, View, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/rsestaurant-info-card-component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 15px;
  background-color: lightgreen;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 15px;
  background-color: steelblue;
`;

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
