import styled from "styled-components/native";
import { Camera } from "expo-camera";

export const FLASH_MODE = [
  Camera.Constants.FlashMode.off,
  Camera.Constants.FlashMode.on,
  Camera.Constants.FlashMode.auto,
  Camera.Constants.FlashMode.torch,
];

export const CAMERATYPE = [
  Camera.Constants.Type.back,
  Camera.Constants.Type.front,
];

export const FLASH_ICON = [
  "flash-off",
  "flash-outline",
  "flash-auto",
  "flashlight",
];

export const StyledCamera = styled(Camera)`
  flex: 1;
`;

export const ErrorView = styled(Camera)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const CameraButtonContainerWrapper = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  padding: ${(props) => props.theme.sizes[2]};
  justify-content: space-between;
`;

export const CameraButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  align-items: center;
`;

export const CameraButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  bottom: 0px;
  border-radius: 50px;
  border-width: 2px
  border-color: #fff;
  align-items: center;
  justify-content: center;
`;
