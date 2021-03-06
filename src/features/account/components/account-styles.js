import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

import { colors } from "../../../framework/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/images/background-3.jpg"), //hard-coded props
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Container = styled.View`
  border-radius: ${(props) => props.theme.sizes[1]};
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.5);
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({})`
  width: 300px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margint-vertical: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 35%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
