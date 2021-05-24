import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { View, FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { Spacer } from "../../../components/spacer/spacer-component";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants-context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const ActivityView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(`Loading: ${isLoading}\nError: ${error}`);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      {isLoading && (
        <ActivityView>
          <ActivityIndicator size={50} animating={true} color={Colors.red100} />
        </ActivityView>
      )}

      <List
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item, index) => item + index}
      />
    </SafeArea>
  );
};
