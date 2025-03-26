import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import ScreenView from "@/components/ScreenView";
import useFetch from "@/hooks/useFetch";
import { getCoffeeById } from "@/services/coffeeApi";
import HeartIcon from "@/components/Icons/HeartIcon";
import Svg, { Path } from "react-native-svg";

const Coffee = () => {
  const { id } = useLocalSearchParams();
  const [size, setSize] = useState(1);

  const router = useRouter();
  const { data, loading, error } = useFetch(() => getCoffeeById(id.toString()));

  return (
    <ScreenView ignoreTabBar>
      {loading ? (
        <ActivityIndicator size={"large"} className="mt-10 justify-center" />
      ) : error ? (
        <Text>{error?.toString()}</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* appbar */}
          <View className="h-[64px] flex-row items-center justify-between">
            <Pressable onPress={() => router.back()}>
              <Svg width="28px" height="28px" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M15 7L10 12L15 17"
                  stroke="#212121"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Pressable>
            <Text className="text-xl font-bold">Details</Text>
            <HeartIcon focused={false} size={24} />
          </View>

          {/* cover image */}
          <Image
            source={{ uri: data?.imageUrl }}
            className="w-full aspect-[4/3] rounded-3xl"
            resizeMode="cover"
          />

          {/* details */}
          <View className="border-b-[#eee] border-b py-4 gap-1">
            <Text className="font-bold text-2xl">{data?.name}</Text>
            <Text className="text-tertiary">{data?.category}</Text>
          </View>
          <View className="py-3 gap-4">
            <Text className="font-semibold text-xl">Description</Text>
            <Text className="text-tertiary text-base leading-normal tracking-normal">
              {data?.description}
            </Text>
            <Text className="font-semibold text-xl">Ingredients</Text>
            <Text className="text-tertiary text-base leading-normal tracking-normal">
              {data?.ingredients.join(", ")}
            </Text>
            <Text className="font-semibold text-xl">Size</Text>
            <View className="flex-row justify-between">
              <Pressable onPress={() => setSize(0)} className="w-[30%]">
                <View
                  className={`border ${
                    size == 0 ? "border-active bg-primary-bg" : "border-[#ddd]"
                  } items-center p-3 rounded-xl`}
                >
                  <Text
                    className={`${size == 0 ? "text-active" : "text-black"}`}
                  >
                    S
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSize(1)} className="w-[30%]">
                <View
                  className={`border ${
                    size == 1 ? "border-active bg-primary-bg" : "border-[#ddd]"
                  } items-center p-3 rounded-xl`}
                >
                  <Text
                    className={`${size == 1 ? "text-active" : "text-black"}`}
                  >
                    M
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSize(2)} className="w-[30%]">
                <View
                  className={`border ${
                    size == 2 ? "border-active bg-primary-bg" : "border-[#ddd]"
                  } items-center p-3 rounded-xl`}
                >
                  <Text
                    className={`${size == 2 ? "text-active" : "text-black"}`}
                  >
                    L
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>

          {/* pricing */}
          <View className="mt-safe flex-row items-start gap-8">
            <View className="flex-col gap-1 px-3">
              <Text className="text-tertiary font-medium">Price</Text>
              <Text className="font-bold text-xl text-active">
                $ {(data?.price + size * 0.15).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => alert("add to cart")}
              className="flex-1 bg-active h-[54px] justify-center items-center rounded-2xl"
            >
              <Text className="text-white">Buy Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </ScreenView>
  );
};

export default Coffee;
