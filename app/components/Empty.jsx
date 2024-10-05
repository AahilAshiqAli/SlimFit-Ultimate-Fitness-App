import { View, Text, Image } from "react-native";
import React from "react";
import images from "../../constants/images";

const Empty = ({ title }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-white font-pregular text-lg">{title}</Text>
    </View>
  );
};

export default Empty;
