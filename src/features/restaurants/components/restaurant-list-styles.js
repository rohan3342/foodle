import { FlatList } from "react-native";
import styled from "styled-components/native";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const FilterList = styled(FlatList).attrs({
  contentContainerStyle: {
    marginBottom: 10,
    marginLeft: 16,
  },
})``;
