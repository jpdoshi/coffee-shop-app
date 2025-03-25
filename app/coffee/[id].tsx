import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import ScreenView from "@/components/ScreenView";

const Coffee = () => {
  const { id } = useLocalSearchParams();
  return (
    <ScreenView>
      <Text>{id}</Text>
    </ScreenView>
  );
};

export default Coffee;
