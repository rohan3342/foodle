import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication-context";
import { Spacer } from "../../../components/spacer/spacer-component";
import { Text } from "../../../components/typography/text-component";
import {
  AccountBackground,
  AccountCover,
  Container,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account-styles";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, isLoading, googleSignIn } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="heading">Foodle</Text>
      <Container>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.red100} />
          )}
        </Spacer>
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="google"
              mode="contained"
              onPress={() => googleSignIn()}
            >
              Google Sign-In
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.red100} />
          )}
        </Spacer>
      </Container>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Main")}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
