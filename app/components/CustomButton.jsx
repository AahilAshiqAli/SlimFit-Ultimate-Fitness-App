import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

// it is not custom buttonper se but touchable opacity which means that when touched it would lower the capacity telling the user thathis touch has been registered

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      {/* Embedded containerStyles from props. Plus, if isLoading then make it light and make the button idsabled*/}
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
