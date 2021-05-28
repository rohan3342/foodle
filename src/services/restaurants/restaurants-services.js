import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `http://localhost:5001/foodle-eb76c/us-central1/placesNearby?location=${location}`
  ).then((res) => res.json());
};

export const restaurantsTranform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
