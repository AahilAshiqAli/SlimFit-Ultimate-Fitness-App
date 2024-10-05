import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import icons from "../../constants/icons";
import { useGlobalContext } from "../../context/GlobalProvider";

const Profile = () => {
  const { user, setUser, isLoggedIn } = useGlobalContext();

  const logout = () => {
    console.log("User logged out successfully");
  };

  return (
    <SafeAreaView className="bg-primary flex-1 h-full px-6">
      {/* Logout Button */}
      <TouchableOpacity className="w-full flex items-end mt-4" onPress={logout}>
        <Image source={icons.logout} className="w-6 h-6" resizeMode="contain" />
      </TouchableOpacity>

      {/* Profile Picture */}
      <View className="flex justify-center items-center mt-8 mb-4">
        <View className="w-24 h-24 border border-secondary-200 rounded-full justify-center items-center overflow-hidden shadow-lg">
          <Image
            source={{ uri: user.avatar }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* User Info */}
      <View className="flex justify-center items-center space-y-2">
        <Text className="text-white text-xl font-psemibold">
          {user.username}
        </Text>
        <Text className="text-gray-300 text-sm">{user.email}</Text>
      </View>

      {/* Points Section */}
      <View className="flex-row items-center justify-center mt-6">
        <Text className="text-white text-center font-psemibold text-3xl">
          10,000
        </Text>
        <Image
          source={icons.points}
          className="w-8 h-8 ml-2"
          resizeMode="contain"
        />
      </View>

      {/* Graph Section with border, shadow, and rounded corners */}
      <View className="mt-8 flex justify-center items-center">
        <Text className="font-psemibold text-center text-white">
          {user.username} Performance past 7 days
        </Text>
        <Image
          source={images.graph}
          className="w-full h-56 max-w-[350px] shadow-lg rounded-lg border-2 border-secondary-200"
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
