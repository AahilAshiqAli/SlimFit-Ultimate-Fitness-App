import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ placeholder, initialquery }) => {
  const pathname = usePathname();
  // this gets the current url
  const [query, setQuery] = useState(initialquery || "");

  return (
    <View className="border-2 border-white w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-5">
      {/* This focus is so it chnages border when yuo tap it*/}
      <TextInput
        className="text-base mt-0.5 flex-1 text-white font-pregular "
        value={query}
        // This represents the value that would be shown on Text Input. So if i write Aahil over here. Whatever i write or
        // delete. Aahil will stay there.
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={(e) => {
          console.log(e);
          setQuery(e);
        }}
        onFocus={() => console.log("Input Focused")}
        // This function is triggered whenever TextInput bar is clicked by user to write.
      />
      <TouchableOpacity
        onPress={() => {
          console.log("called");
          if (!query) {
            return Alert.alert(
              "Missing query.\n Please input something to search results across exercises"
            );
          }
          // this is needed because we will not check for query unless search button is pressed
          if (pathname.startsWith("/search")) {
            router.setParams({ query });
            // this is used when you are updating the search query. Previosuly user has fired a search query.
            // by doing this, you just update the url and dont push for a new route or reload
          } else {
            // for first tme search
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
