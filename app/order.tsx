import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Svg, { G, Path } from "react-native-svg";
import ScreenView from "@/components/ScreenView";

const Order = () => {
  const { id, name, category, imageUrl, price } = useLocalSearchParams();

  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center justify-between mx-5">
          <Pressable onPress={() => router.back()}>
            <Svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
              <Path
                d="M15 7L10 12L15 17"
                stroke="#212121"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
          <Text className="text-xl font-bold">Order</Text>
          <View className="w-[30px]" />
        </View>
        <View className="pb-6 border-b border-[#e0e0e0] mx-5">
          <Text className="text-xl font-bold">Delivery Address</Text>
          <View className="flex-col gap-1 py-4">
            <Text className="text-lg font-semibold">Jl. Kpg Sutoyo</Text>
            <Text className="font-medium text-tertiary">
              Kpg Sutoyo No. 620, Bilzen, Tanjungbalai
            </Text>
          </View>
          <View className="flex-row gap-2">
            <View className="py-1 px-3 bg-white border border-[#e0e0e0] rounded-full">
              <Text className="font-medium text-sm">Edit Address</Text>
            </View>
            <View className="py-1 px-3 bg-white border border-[#e0e0e0] rounded-full">
              <Text className="font-medium text-sm">Add Note</Text>
            </View>
          </View>
        </View>
        <View className="py-6 flex-row items-center gap-4 mx-5">
          <Image
            source={{ uri: imageUrl.toString() }}
            className="w-16 aspect-square rounded-lg"
          />
          <View className="flex-col gap-0.5 flex-1">
            <Text className="font-bold text-xl">{name}</Text>
            <Text className="font-medium text-tertiary">{category}</Text>
          </View>
          <View className="flex-row items-center gap-4">
            <Pressable
              onPress={() =>
                setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
              }
            >
              <View className="rounded-full p-2 h-[24px] w-[24px] bg-white shadow-sm">
                <Text className="font-medium h-[24px] w-[24px] translate-x-[2px] text-2xl -translate-y-3">
                  -
                </Text>
              </View>
            </Pressable>
            <Text className="text-lg font-bold">{count}</Text>
            <Pressable onPress={() => setCount((prevCount) => prevCount + 1)}>
              <View className="rounded-full p-2 h-[24px] w-[24px] bg-white shadow-sm shadow-primary-shadow">
                <Text className="font-medium h-[24px] w-[24px] text-lg translate-x-[1px] -translate-y-[8px]">
                  +
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View className="w-full h-2 bg-primary-bg" />
        <View className="py-6 mx-5">
          <View className="bg-white border border-[#eee] shadow-lg shadow-primary-shadow py-4 px-6 rounded-2xl flex-row justify-between items-center">
            <Text className="text-base font-semibold">1 Discount Applies</Text>
            <Svg width="16px" height="16px" viewBox="0 0 1024 1024">
              <Path
                fill="#000000"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              />
            </Svg>
          </View>
        </View>
        <View className="pb-6 mx-5">
          <Text className="text-xl font-bold">Payment Summary</Text>
          <View className="flex-col py-4 gap-2">
            <View className="flex-row justify-between items-center">
              <Text className="font-medium">Price</Text>
              <Text className="font-semibold">
                $ {(Number(price) * count).toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="font-medium">Delivery Fee</Text>
              <Text className="font-semibold">
                $ {Math.round(Number(price) / 2).toFixed(1)}
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="font-medium">Discount (5%)</Text>
              <Text className="font-semibold">
                $ {(Number(price) * count * (5 / 100)).toFixed(1)}
              </Text>
            </View>
          </View>
        </View>
        <View className="px-5 mt-safe gap-4">
          <View className="p-3 px-5 bg-white border border-[#eee] shadow-lg shadow-primary-shadow rounded-2xl flex-row items-center justify-between">
            <View className="flex-col gap-1">
              <Text className="text-lg font-bold">Cash/Wallet</Text>
              <Text className="text-primary-color font-bold">
                ${" "}
                {(
                  Number(price) * count +
                  Number(price) / 2 -
                  Number(price) * count * (5 / 100)
                ).toFixed(1)}
                0
              </Text>
            </View>
            <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <G id="SVGRepo_iconCarrier">
                <Path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#000000"
                />
              </G>
            </Svg>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => alert("Order successful!")}
          >
            <View className="py-4 bg-primary-color items-center rounded-2xl justify-center shadow-lg shadow-primary-shadow">
              <Text className="text-white font-semibold text-lg">
                Order Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Order;
