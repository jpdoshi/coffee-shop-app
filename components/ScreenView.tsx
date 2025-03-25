import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenView = ({ children }: any) => {
  return (
    <View className="flex-1 bg-white pb-[72px]">
      <SafeAreaView className="px-5">{children}</SafeAreaView>
    </View>
  );
};

export default ScreenView;
