import React from "react";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer-component";
import { Text } from "../../../components/typography/text-component";
import {
  AccountBackground,
  AccountCover,
  Container,
  AuthButton,
  AnimationWrapper,
} from "../components/account-styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="contain"
          source={require("../../../../assets/dancing-burger.json")}
        />
      </AnimationWrapper>
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
