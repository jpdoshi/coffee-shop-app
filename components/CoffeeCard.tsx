import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const CoffeeCard = ({ _id, name, imageUrl, category, price }: any) => {
  return (
    <Link
      // @ts-ignore
      href={`/coffee/${_id}`}
      asChild
    >
      <TouchableOpacity className="w-[50%]">
        <View className="p-2 bg-white shadow-lg shadow-gray-300 rounded-3xl">
          <Image
            source={{ uri: imageUrl }}
            className="rounded-2xl aspect-square w-full"
          />
          <View className="px-1 py-2">
            <Text className="text-lg font-bold leading-tight" numberOfLines={1}>
              {name}
            </Text>
            <Text className="text-tertiary leading-tight mb-1">{category}</Text>
            <Text className="text-xl font-bold">
              {"$ " + (price + 1 * 0.15).toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CoffeeCard;
