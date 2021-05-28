import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../location/location-context";

import {
  restaurantsRequest,
  restaurantsTranform,
} from "./restaurants-services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (searchLocation) => {
    setIsLoading(true);
    setRestaurants([]);
    restaurantsRequest(searchLocation)
      .then(restaurantsTranform)
      .then((resutls) => {
        setIsLoading(false);
        setRestaurants(resutls);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
