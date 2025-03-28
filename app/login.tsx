import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenView from "@/components/ScreenView";

const login = () => {
  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center mx-5">
          <Text className="text-2xl font-bold">Login</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default login;
