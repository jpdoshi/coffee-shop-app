import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import ScreenView from "@/components/ScreenView";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";

const signup = () => {
  const router = useRouter();

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center mx-5 gap-3">
          <Pressable onPress={() => router.back()}>
            <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <Path
                d="M5 12H19M5 12L11 6M5 12L11 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
          <Text className="text-2xl font-bold">Signup</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default signup;
