import React, { createContext, useState } from "react";

export const FavouritsContext = createContext();

export const FavouritsContextProvider = ({ children }) => {
  const [favourits, setFavourits] = useState([]);
  const add = (restaurant) => setFavourits([...favourits, restaurant]);
  const remove = (restaurant) => {
    const newFavourits = favourits.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourits(newFavourits);
  };

  return (
    <FavouritsContext.Provider
      value={{
        favourits,
        addToFavourites: add,
        removeFromFavourits: remove,
      }}
    >
      {children}
    </FavouritsContext.Provider>
  );
};
