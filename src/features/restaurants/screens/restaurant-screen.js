import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { RestaurantList } from "../components/restaurant-list-styles";
import { Search } from "../components/search-component";

import { FavouriteBar } from "../../../components/favourites/favourite-bar-component";
import { FadeInView } from "../../../components/animations/fade-animation";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { Spacer } from "../../../components/spacer/spacer-component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants-context";
import { FavouritesContext } from "../../../services/favourites/favourites-context";

const ActivityView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading && (
        <ActivityView>
          <ActivityIndicator size={50} animating={true} color={Colors.red100} />
        </ActivityView>
      )}

      <RestaurantList
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
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
