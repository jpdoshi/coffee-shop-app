import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { getSavedItems, removeStoreItem } from "@/utils/store";
import { Link } from "expo-router";
import useFetch from "@/hooks/useFetch";
import { getCoffeeById } from "@/services/coffeeApi";
import Svg, { Path } from "react-native-svg";

const SavedCoffee = ({ id, setSaved }: any) => {
  const { data } = useFetch(() => getCoffeeById(id));

  return (
    <Link href={`/coffee/${id}`}>
      <View className="flex-row w-full items-center justify-between p-2 bg-white rounded-2xl shadow-lg shadow-gray-300">
        <View className="flex-row items-center gap-4">
          <Image
            source={{ uri: data?.imageUrl }}
            className="w-24 aspect-square rounded-xl"
          />
          <View className="flex-col">
            <Text className="text-lg font-bold leading-tight">
              {data?.name}
            </Text>
            <Text className="text-base text-tertiary font-medium">
              {data?.category}
            </Text>
            <Text className="text-active font-bold mt-2">
              $ {data?.price + 1 * 0.15}
            </Text>
          </View>
        </View>
        <Pressable
          onPress={async () => {
            await removeStoreItem(id.toString());
            setSaved(await getSavedItems());
          }}
          className="px-1"
        >
          <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <Path
              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
              fill="#0F0F0F"
            />
          </Svg>
        </Pressable>
      </View>
    </Link>
  );
};

export default SavedCoffee;
