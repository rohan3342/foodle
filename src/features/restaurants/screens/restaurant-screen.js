import React from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { Spacer } from "../../../components/spacer/spacer-component";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <List
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item, index) => item + index}
    />
  </SafeArea>
);
