import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import ScreenView from "@/components/ScreenView";
import useFetch from "@/hooks/useFetch";
import { getCoffeeById } from "@/services/coffeeApi";
import HeartIcon from "@/components/Icons/HeartIcon";
import Svg, { G, Path } from "react-native-svg";
import { addStoreItem } from "@/utils/store";

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
            <Text className="text-xl font-bold">Details</Text>
            <Pressable
              onPress={async () => {
                await addStoreItem(id.toString());
                alert("saved to cart");
              }}
            >
              <Svg height={24} width={24} viewBox="0 0 24 24" fill="none">
                <G id="SVGRepo_iconCarrier">
                  <Path
                    d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                    stroke={"#010101"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </G>
              </Svg>
            </Pressable>
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
            <Text className="text-tertiary text-base font-medium">
              {data?.category}
            </Text>
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
                    className={`${
                      size == 0 ? "text-active" : "text-black"
                    } font-medium`}
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
                    className={`${
                      size == 1 ? "text-active" : "text-black"
                    } font-medium`}
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
                    className={`${
                      size == 2 ? "text-active" : "text-black"
                    } font-medium`}
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
              <Text className="text-white font-semibold text-lg">Buy Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </ScreenView>
  );
};

export default Coffee;
