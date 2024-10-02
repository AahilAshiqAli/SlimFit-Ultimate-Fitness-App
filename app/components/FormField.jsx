import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-white w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        {/* This focus is so it chnages border when yuo tap it*/}
        <TextInput
          className="flex-1 text-white font-psemibold text-base "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          // Used to hide property and only allow when showPassword is true
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => console.log("Input Focused")}
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)} // flip the showPassword
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
