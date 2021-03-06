import React, { useState, useContext, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Text } from "../../../components/typography/text-component";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { Spacer } from "../../../components/spacer/spacer-component";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  margin-vertical: ${(props) => props.theme.sizes[2]};
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoURI = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoURI);
  };

  /* useFocus triggers everytime the screen is back into focus */
  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={140} backgroundColor="#2182BD" icon="human" />
          ) : (
            <Avatar.Image
              size={140}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} icon="heart" color="black" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          description="View your favourites"
          left={(props) => <List.Icon {...props} icon="door" color="black" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
