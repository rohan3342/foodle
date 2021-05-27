import React, { useState, useEffect, useRef, useContext } from "react";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ErrorView,
  CAMERATYPE,
  FLASH_MODE,
  FLASH_ICON,
  StyledCamera,
  CameraButton,
  CameraButtonContainer,
  CameraButtonContainerWrapper,
} from "../components/camera-styles-and-services";
import { Text } from "../../../components/typography/text-component";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  const [flashIcon, setflashIcon] = useState(FLASH_ICON[0]);
  const [hasPermission, setHasPermission] = useState(null);
  const [FlashMode, setFlashMode] = useState(FLASH_MODE[0]);
  const [cameraRev, setCameraRev] = useState(CAMERATYPE[0]);

  const takeSnap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  const changeFlashMode = async () => {
    if (cameraRef) {
      if (FlashMode === FLASH_MODE[0]) {
        setFlashMode(FLASH_MODE[1]);
        setflashIcon(FLASH_ICON[1]);
        return;
      }
      if (FlashMode === FLASH_MODE[1]) {
        setFlashMode(FLASH_MODE[2]);
        setflashIcon(FLASH_ICON[2]);
        return;
      }
      if (FlashMode === FLASH_MODE[2]) {
        setFlashMode(FLASH_MODE[3]);
        setflashIcon(FLASH_ICON[3]);
        return;
      }
      if (FlashMode === FLASH_MODE[3]) {
        setFlashMode(FLASH_MODE[0]);
        setflashIcon([FLASH_ICON[0]]);
        return;
      }
    }
  };

  const changeCamera = async () => {
    if (cameraRef) {
      if (cameraRev === CAMERATYPE[0]) {
        setCameraRev(CAMERATYPE[1]);
        return;
      }
      if (cameraRev === CAMERATYPE[2]) {
        setCameraRev(CAMERATYPE[0]);
        return;
      }
    }
  };

  const askForPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    askForPermission();
  }, []);

  if (hasPermission === null) {
    return <ErrorView />;
  }
  if (hasPermission === false) {
    return (
      <ErrorView>
        <Text variant="body">No Camera Access.</Text>
      </ErrorView>
    );
  }

  return (
    <>
      <StyledCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={cameraRev}
        flashMode={FlashMode}
      />
      <CameraButtonContainerWrapper>
        <CameraButtonContainer>
          <CameraButton onPress={changeFlashMode}>
            <MaterialCommunityIcons name={flashIcon} size={35} color="white" />
          </CameraButton>
          <CameraButton onPress={takeSnap}>
            <MaterialCommunityIcons
              name="camera-iris"
              size={60}
              color="white"
            />
          </CameraButton>
          <CameraButton onPress={changeCamera}>
            <Ionicons name="camera-reverse-outline" size={35} color="white" />
          </CameraButton>
        </CameraButtonContainer>
      </CameraButtonContainerWrapper>
    </>
  );
};
