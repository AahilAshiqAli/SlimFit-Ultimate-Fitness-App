import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import icons from "../../constants/icons";
import { useGlobalContext } from "../../context/GlobalProvider";
import Trending from "../components/Trending";
import useAppWrite from "../../lib/useAppWrite";
import { GetAllPosts, signOut } from "../../lib/appwrite";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppWrite(GetAllPosts);

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace("/sign-in");
    console.log("User logged out successfully");
  };

  // Example fitness and daily goals
  const [fitnessGoalProgress, setFitnessGoalProgress] = useState(0.6); // Example: 60% progress for fitness goal
  const [dailyGoalProgress, setDailyGoalProgress] = useState(0.75); // Example: 75% progress for daily goal

  // Example Motivational Quotes / Tips
  const motivationalQuotes = [
    "The only bad workout is the one that didn’t happen.",
    "Stay hydrated during your workout.",
    "Push yourself, because no one else is going to do it for you.",
    "Success starts with self-discipline.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Rotate quotes every 5 seconds
    const interval = setInterval(() => {
      const randomQuote =
        motivationalQuotes[
          Math.floor(Math.random() * motivationalQuotes.length)
        ];
      setQuote(randomQuote);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className="bg-primary flex-1 h-full px-6">
      <ScrollView>
        {/* Logout Button */}
        <TouchableOpacity
          className="w-full flex items-end mt-4"
          onPress={logout}
        >
          <Image
            source={icons.logout}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Profile Picture */}
        <View className="flex justify-center items-center mt-8 mb-4">
          <View className="w-24 h-24 border border-secondary-200 rounded-full justify-center items-center overflow-hidden shadow-lg">
            <Image
              source={
                user && user.avatar ? { uri: user.avatar } : icons.profile
              }
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* User Info */}
        <View className="flex justify-center items-center space-y-2">
          <Text className="text-white text-xl font-psemibold">
            {user ? user.username : "Guest"}
          </Text>
          <Text className="text-gray-300 text-sm">
            {user ? user.email : "Guest"}
          </Text>
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

        {/* Motivational Quotes Section */}
        <View className="mt-6">
          <Text className="text-white text-lg font-psemibold text-center italic">
            {quote}
          </Text>
        </View>

        {/* Fitness Goals Section */}
        <View className="mt-8">
          <Text className="text-white text-xl font-psemibold mb-4">
            Fitness Goals
          </Text>
          <Text className="text-gray-300 mb-2">Lose 5 kg - Progress: 60%</Text>

          {/* Custom Progress Bar */}
          <View
            style={{
              backgroundColor: "#555",
              height: 8,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: `${fitnessGoalProgress * 100}%`,
                backgroundColor: "white",
                height: "100%",
              }}
            />
          </View>

          <Text className="text-gray-300 mt-4 mb-2">
            Run 5 km in under 30 minutes - Progress: 75%
          </Text>

          {/* Another Custom Progress Bar */}
          <View
            style={{
              backgroundColor: "#555",
              height: 8,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: `${dailyGoalProgress * 100}%`,
                backgroundColor: "white",
                height: "100%",
              }}
            />
          </View>
        </View>

        {/* Graph of Recent Activity */}
        <View className="mt-8">
          <Text className="text-white text-xl font-psemibold mb-4">
            Recent Activity
          </Text>
          <Image
            source={images.graph}
            className="w-full h-56 rounded-lg border border-secondary-400"
            resizeMode="contain"
          />
        </View>

        {/* Achievements Section */}
        <View className="mt-6 mb-6">
          <Text className="text-white text-xl font-psemibold mb-2">
            Achievements
          </Text>
          <View className="flex-row justify-around space-x-4 mt-5">
            <Image source={icons.gold_badge} className="w-10 h-10" />
            <Image source={icons.gold_badge} className="w-10 h-10" />
            <Image source={icons.gold_badge} className="w-10 h-10" />
          </View>
        </View>

        {/* Workout Plan Section */}
        <View className="mt-6">
          <Text className="text-white text-xl font-psemibold mb-2">
            Subscribed Workout Plan
          </Text>
          <Trending posts={posts} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
