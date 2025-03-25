import { Text, Pressable } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  title?: string;
  index?: Number;
  activeTab: Number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const CategoryTab = ({ title, index, activeTab, setActiveTab }: Props) => {
  return (
    <Pressable
      onPress={() => {
        //@ts-ignore
        setActiveTab(index);
      }}
      className={`shadow rounded-xl px-3 py-1.5 ${
        activeTab == index ? "bg-active" : "bg-[#f5f5f5]"
      }`}
    >
      <Text
        className={`font-semibold text-base ${
          activeTab == index ? "text-white" : "text-black"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryTab;
