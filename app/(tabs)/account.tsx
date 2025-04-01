import ScreenView from "@/components/ScreenView";
import { getUserDetails, removeKey } from "@/utils/store";
import { useRouter } from "expo-router";
import { reloadAsync } from "expo-updates";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const account = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const retrieveEmail = async () => {
      const userDetails = await getUserDetails();
      setEmail(userDetails.email);
    };

    retrieveEmail();
  }, []);

  const router = useRouter();
  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center mx-5">
          <Text className="text-2xl font-bold">Account</Text>
        </View>
        <Text className="mx-5 text-tertiary font-medium">Your Profile</Text>
        <View className="flex-row justify-between items-center gap-2 mx-5 py-5 border-b border-[#ddd]">
          <View className="flex-row gap-3 items-center">
            <Svg height={40} width={40} viewBox="0 0 32 32">
              <Circle
                cx="16"
                cy="16"
                fill="none"
                r="15"
                stroke="#242424"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />

              <Path
                d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
                fill="none"
                stroke="#242424"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />

              <Circle
                cx="16"
                cy="11"
                fill="none"
                r="6"
                stroke="#242424"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </Svg>
            <View className="flex-col">
              <Text className="text-sm leading-tight text-primary-color font-medium">
                Signed in
              </Text>
              <Text
                className="text-lg leading-tight mt-1 font-semibold"
                numberOfLines={1}
              >
                {email}
              </Text>
            </View>
          </View>
          <Pressable
            onPress={async () => {
              await removeKey("user");
              alert("logout successful!");
              router.push("/login");
              await reloadAsync();
            }}
          >
            <View className="p-2 px-4 bg-red-600 rounded-lg">
              <Text className="font-semibold text-white">Logout</Text>
            </View>
          </Pressable>
        </View>
        <View className="justify-center items-center mt-64">
          <Text className="text-tertiary text-lg">No recent notifications</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default account;
