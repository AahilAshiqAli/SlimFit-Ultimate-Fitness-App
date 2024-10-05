import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import SearchInput from "../components/SearchInput";
import VideoCard from "../components/VideoCard";
import { searchPosts } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppWrite";
import { useLocalSearchParams } from "expo-router";
import Empty from "../components/Empty";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppWrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

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
                <Text className="text-2xl font-psemibold text-white">user</Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-8 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput
              initialquery={query}
              placeholder={"Search for an exercise"}
            />
          </View>
        )}
        ListEmptyComponent={() => <Empty title="No Matching Exercise Found" />}
      />
      {/* scroll view mei dono vertical and horizontal scroll nhi hosakte*/}
    </SafeAreaView>
  );
};

export default Search;
