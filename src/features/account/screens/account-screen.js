import React from "react";

import { Spacer } from "../../../components/spacer/spacer-component";
import { Text } from "../../../components/typography/text-component";
import {
  AccountBackground,
  AccountCover,
  Container,
  AuthButton,
} from "../components/account-styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="heading">Foodle</Text>
      <Container>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Container>
    </AccountBackground>
  );
};
