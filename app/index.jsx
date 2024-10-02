import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          {/* Assigned full width and height of scollable view to it*/}
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.homepic}
            className="max-w--[380px] w-full h-[300px] rounded-xl"
            resizeMode="contain"
          />

          <View className="relative mt-10">
            <Text className="text-3xl text-white font-bold text-center">
              Commit To be {"\n"} Fit
              <Text className="text-secondary-200">
                {" "}
                {/* To make it span */}
                SlimFit
              </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-3 "
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Transform Your Body, Empower Your Mind
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
      {/* This is so wifi wala bar will become light warna it wil turn black*/}
    </SafeAreaView>
  );
}
