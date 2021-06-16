import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors, Card } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import {
  RestaurantList,
  FilterList,
} from "../components/restaurant-list-styles";
import { Search } from "../components/search-component";

import { FavouriteBar } from "../../../components/favourites/favourite-bar-component";
import { FadeInView } from "../../../components/animations/fade-animation";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { Spacer } from "../../../components/spacer/spacer-component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants-context";
import { FavouritesContext } from "../../../services/favourites/favourites-context";
import { Text } from "../../../components/typography/text-component";

const ActivityView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const CardView = styled(Card)`
  height: 40px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-vertical: 5px;
  padding-horizontal: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const FilterData = [
  "Trending",
  "Veg",
  "Non-Veg",
  "With Beverages",
  "Italian",
  "Ice Cream",
  "Shushi",
];

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
      {!isLoading && (
        <View>
          <FilterList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={FilterData}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <CardView elevation={2}>
                    <Text>{item}</Text>
                  </CardView>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      )}
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
