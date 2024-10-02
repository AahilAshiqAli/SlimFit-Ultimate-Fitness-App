import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <SafeAreaView>
      <FlatList data={[{ id: 1 }]} keyExtractor={(item) => item.id} />
      {/* Used to render list of components*/}
    </SafeAreaView>
  );
};

export default home;
