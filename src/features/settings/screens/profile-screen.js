import React, { useState, useContext, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  margin-vertical: ${(props) => props.theme.sizes[2]};
  align-items: center;
`;

const IconView = styled.View`
  z-index: 99;
  position: absolute;
  height: 140px;
  width: 140px;
  border-radius: 100px;
  align-items: flex-end;
  justify-content: flex-end;
`;

const IconWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 35%;
  background-color: tomato;
  border-radius: 100px;
  border-color: white;
  border-width: 2px;
`;

export const ProfileScreen = ({ navigation }) => {
  const { user, googleUser } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const { name, email, photoUrl } = googleUser?.user;
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
        <IconView>
          <IconWrapper onPress={() => navigation.navigate("Camera")}>
            <FontAwesome size={25} color="#fff" name="camera" />
          </IconWrapper>
        </IconView>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!googleUser && !user ? (
            <Avatar.Icon size={140} backgroundColor="tomato" icon="human" />
          ) : (
            <Avatar.Image
              size={140}
              source={{ uri: user ? photo : photoUrl }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title={googleUser ? name : "Name"}
          left={(props) => (
            <List.Icon {...props} icon="rename-box" color="tomato" />
          )}
          onPress={() => null}
        />
        <SettingsItem
          title={googleUser ? email : user.email}
          left={(props) => <List.Icon {...props} icon="email" color="tomato" />}
          onPress={() => null}
        />
        <SettingsItem
          title="Change Password"
          left={(props) => (
            <List.Icon {...props} icon="onepassword" color="tomato" />
          )}
          onPress={() => null}
        />
        <SettingsItem
          title="+91 9868010682"
          left={(props) => (
            <List.Icon {...props} icon="cellphone-android" color="tomato" />
          )}
          onPress={() => null}
        />
      </List.Section>
    </SafeArea>
  );
};
