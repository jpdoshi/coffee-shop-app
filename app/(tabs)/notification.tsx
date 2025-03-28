import ScreenView from "@/components/ScreenView";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const account = () => {
  const router = useRouter();
  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center justify-between mx-5">
          <Text className="text-xl font-bold">Notifications</Text>
          <Pressable
            onPress={async () => {
              alert("logout successful!");
              router.push("/");
            }}
          >
            <View className="p-2 px-4 bg-red-600 rounded-lg">
              <Text className="font-semibold text-white">Logout</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default account;
