import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, Text } from "react-native";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator headerMode="none">
      <AccountStack.Screen
        name="Main"
        component={() => (
          <SafeAreaView>
            <Text>Account Screen</Text>
          </SafeAreaView>
        )}
      />
      <AccountStack.Screen
        name="Login"
        component={() => (
          <SafeAreaView>
            <Text>Login Screen</Text>
          </SafeAreaView>
        )}
      />
    </AccountStack.Navigator>
  );
};
