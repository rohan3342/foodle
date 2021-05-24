import React, { useState, useEffect, createContext } from "react";

import {
  restaurantsRequest,
  restaurantsTranform,
} from "./restaurants-services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTranform)
        .then((resutls) => {
          setIsLoading(false);
          setRestaurants(resutls);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

// restaurantsRequest()
//   .then(restaurantsTranform)
//   .then((restaurantsTranformRes) =>
//     console.log("Result", restaurantsTranformRes)
//   )
//   .catch((error) => console.log("Error", error));
