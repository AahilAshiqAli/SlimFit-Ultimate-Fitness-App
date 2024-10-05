import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="border-2 border-white w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-5">
      {/* This focus is so it chnages border when yuo tap it*/}
      <TextInput
        className="text-base mt-0.5 flex-1 text-white font-pregular "
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChangeText}
        // Used to hide property and only allow when showPassword is true
        secureTextEntry={title === "Password" && !showPassword}
        onFocus={() => console.log("Input Focused")}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
