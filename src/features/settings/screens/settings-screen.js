import React, { useContext } from "react";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} icon="heart" color="black" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          description="View your favourites"
          left={(props) => <List.Icon {...props} icon="door" color="black" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
