import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { Spacer } from "../../../components/spacer/spacer-component";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants-context";
import { Search } from "../components/search-component";

const List = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const ActivityView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(`Loading: ${isLoading}\nError: ${error}`);
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <ActivityView>
          <ActivityIndicator size={50} animating={true} color={Colors.red100} />
        </ActivityView>
      )}

      <List
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
