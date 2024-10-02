import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

// Stack is basically LIFO. As you see the screens one after the other, the newer ones are stakced onto the older ones and so when you press back, it simply removes the top layer
// Now, why are we using Stakc instead of tabs navigation. Tab navgation basically provides options for different screens to choose with no commanility in navigation or workflow between the screens.
// When you want to follow a workflow or send user inside a directory from one screen to other thne you use stack navigation
export default AuthLayout;
