import ScreenView from "@/components/ScreenView";
import { ScrollView, Text, View } from "react-native";

const cart = () => {
  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center mx-5">
          <Text className="text-2xl font-bold">Your Orders</Text>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default cart;
