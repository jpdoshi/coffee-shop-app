import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenView from "@/components/ScreenView";
import { getSavedItems } from "@/utils/store";
import SavedCoffee from "@/components/SavedCoffee";
import Svg, { Path } from "react-native-svg";

const liked = () => {
  const [saved, setSaved] = useState<any>([]);

  useEffect(() => {
    const fetchSaved = async () => {
      const data = await getSavedItems();
      setSaved(data || []);
    };

    fetchSaved();
  }, []);

  return (
    <>
      <ScreenView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="h-[64px] flex-row items-center justify-between mx-5">
            <Text className="text-2xl font-bold">Saved Coffee</Text>
            <Pressable
              onPress={async () => {
                const items = await getSavedItems();
                setSaved(items);
              }}
            >
              <Svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14"
                  stroke="#000000"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Pressable>
          </View>
          <View className="flex-col gap-2 mx-5 pb-4">
            {saved && saved.length > 0 ? (
              saved.map((id: string, index: number) => (
                <SavedCoffee
                  key={index}
                  id={id}
                  saved={saved}
                  setSaved={setSaved}
                />
              ))
            ) : (
              <View className="h-[50vh] justify-center items-center gap-2">
                <Text className="text-tertiary font-medium text-lg">
                  No saved coffee
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </ScreenView>
    </>
  );
};

export default liked;
