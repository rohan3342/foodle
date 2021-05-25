import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

import { theme } from "./src/framework/theme";
import { Navigation } from "./src/framework/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants-context";
import { LocationContextProvider } from "./src/services/location/location-context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites-context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication-context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAz2Q9TTFfs2zpOlu-enLaFvocBVb0GmIk",
  authDomain: "foodle-eb76c.firebaseapp.com",
  projectId: "foodle-eb76c",
  storageBucket: "foodle-eb76c.appspot.com",
  messagingSenderId: "207443081304",
  appId: "1:207443081304:web:05c02e61822f4dadf0b22d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
