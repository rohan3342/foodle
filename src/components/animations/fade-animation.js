import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const FadeInView = ({ duration = 1500, ...props }) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation, duration]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnimation,
      }}
    >
      {props.children}
    </Animated.View>
  );
};
