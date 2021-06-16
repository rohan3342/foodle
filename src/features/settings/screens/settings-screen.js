import React, { useState, useContext, useCallback } from "react";
import { View } from "react-native";
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
  const { onLogout, user, googleUser } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoURI = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoURI);
  };

  /* useFocus triggers everytime the screen is back into focus */
  useFocusEffect(
    useCallback(() => {
      user && getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <View>
          {!googleUser?.user?.photoUrl && !user ? (
            <Avatar.Icon size={140} backgroundColor="tomato" icon="human" />
          ) : (
            <Avatar.Image
              size={140}
              source={{ uri: user ? photo : googleUser.user.photoUrl }}
              backgroundColor="#2182BD"
            />
          )}
        </View>
        {googleUser?.user.name && (
          <Spacer position="top" size="large">
            <Text variant="label1">{googleUser.user.name}</Text>
          </Spacer>
        )}
        <Spacer position="top" size="large">
          <Text variant="label">
            {user ? user.email : googleUser.user.email}
          </Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Profile"
          description="View your profile"
          left={(props) => (
            <List.Icon {...props} icon="account-circle" color="tomato" />
          )}
          onPress={() => navigation.navigate("Profile")}
        />
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} icon="heart" color="tomato" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Manage Address"
          description="Mange your address"
          left={(props) => <List.Icon {...props} icon="home" color="tomato" />}
          onPress={() => navigation.navigate("ManageAddress")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} icon="door" color="tomato" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
