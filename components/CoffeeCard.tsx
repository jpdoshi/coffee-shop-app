import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import priceConstants from "@/constants/price";

const CoffeeCard = ({ _id, name, imageUrl, category, price }: any) => {
  const router = useRouter();

  return (
    <Link
      // @ts-ignore
      href={`/coffee/${_id}`}
      asChild
    >
      <TouchableOpacity className="w-[50%]">
        <View className="p-2 bg-white rounded-2xl shadow-lg shadow-primary-shadow">
          <Image
            source={{ uri: imageUrl }}
            className="rounded-xl aspect-square w-full"
          />
          <View className="p-1 pt-2">
            <Text className="text-lg font-bold leading-tight" numberOfLines={1}>
              {name}
            </Text>
            <Text className="text-tertiary text-sm leading-tight">
              {category}
            </Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold">
                {"$ " + (price + 1 * priceConstants.priceFactor).toFixed(2)}
              </Text>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/order",
                    params: {
                      id: _id,
                      name,
                      category,
                      imageUrl,
                      price: price + 1 * priceConstants.priceFactor,
                    },
                  })
                }
              >
                <View className="justify-center items-center size-8 rounded-lg bg-primary-color">
                  <Text className="text-white text-2xl">+</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CoffeeCard;
