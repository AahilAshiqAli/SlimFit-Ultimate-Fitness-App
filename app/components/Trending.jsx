import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity, ImageBackground } from "react-native";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

// zoom in and zoom out are done using react-native-animatable-library

const handlePress = () => {
  console.log("Hello there");
};

const TrendingItem = ({ activeItem, item }) => {
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      <TouchableOpacity
        className="relative flex justify-center items-center"
        activeOpacity={0.7}
        onPress={handlePress}
      >
        <ImageBackground
          source={{
            uri: item.thumbnail,
          }}
          className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
          resizeMode="cover"
        >
          {/* Image background is used as a backgrund image in which you can write anything*/}
          <Text
            style={{
              color: "white",
              position: "absolute",
              bottom: 10,
              left: 10,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {item.Title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    //then my posts would be refreshed
    setRefreshing(false);
  };

  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
      {
        /* Since we know that at one time only one item is on Focus, so thats why retrieving 0th element */
      }
    }
  };
  // Horizontal List
  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      // This is triggered when item that is on focus changes
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      // This object specifies the conditions under which an item is considered "visible"
      // 70 means that an item is considered "visible" if 70% of the item is visible in the viewport
      contentOffset={{ x: 170 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default Trending;
