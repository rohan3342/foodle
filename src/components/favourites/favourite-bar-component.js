import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../spacer/spacer-component";
import { Text } from "../typography/text-component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info-component";

const FavouriteWrapper = styled.View`
  padding: 5px;
`;

const Empty = styled.View`
  padding: 10px;
  align-items: center;
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return (
      <Empty>
        <Text variants="caption">Empty</Text>
      </Empty>
    );
  }
  return (
    <FavouriteWrapper>
      <Spacer variants="left" size="large">
        <Text variants="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
