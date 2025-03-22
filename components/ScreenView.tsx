import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenView = ({ children }: any) => {
  return (
    <View className="flex-1">
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default ScreenView;
