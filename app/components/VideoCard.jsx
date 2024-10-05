import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const VideoCard = ({ id, title, thumbnail }) => {
  const handlePress = () => {
    console.log("Hello there");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        marginBottom: 20,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#2c3e50",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
      }}
      activeOpacity={0.8}
    >
      {/* Image section */}
      <View style={{ width: "100%", height: 180 }}>
        <Image
          source={{ uri: thumbnail }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      {/* Text section */}
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 12,
          backgroundColor: "#34495e",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            color: "#ecf0f1",
            textAlign: "center",
            textTransform: "uppercase",
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
