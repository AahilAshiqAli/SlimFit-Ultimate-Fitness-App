import { View, Text, FlatList, Image, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import SearchInput from "../components/SearchInput";
import Trending from "../components/Trending";
import VideoCard from "../components/VideoCard";
import useAppWrite from "../../lib/useAppWrite";
import { GetAllPosts } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const { user } = useGlobalContext();
  const { data: posts, refetch } = useAppWrite(GetAllPosts); // Directly assign the return value to posts
  return (
    <SafeAreaView className="bg-primary flex-1 h-full">
      {/* vertical List*/}
      <FlatList
        data={posts} // The data array
        keyExtractor={(item) => item.$id} // Ensure the key is a string
        renderItem={({ item }) => (
          <VideoCard
            id={item.$id}
            title={item.Title}
            thumbnail={item.thumbnail}
          /> // Access the correct `id` property
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            {/* space-y- adds this much space between each child element of this View component*/}
            <View className="justify-between items-start flex-row mb-6">
              {/* justify-between means equally space the elements in flex container but corner se element ke between space nahi hogi
               if you want equal space between elements and 1/2 space between element and corner then use justify-around*/}
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {user.username}
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-8 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput placeholder={"Search for an exercise"} />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-white font-psemibold text-lg ">
                Your Exercises
              </Text>

              <Trending posts={posts} />
            </View>
            <Text className="text-white font-psemibold text-lg ">
              Popular Exercises
            </Text>
          </View>
        )}
      />
      {/* scroll view mei dono vertical and horizontal scroll nhi hosakte*/}
    </SafeAreaView>
  );
};

export default Home;
