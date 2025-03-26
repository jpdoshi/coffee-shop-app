import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenView = ({ children, ignoreTabBar }: any) => {
  return (
    <View
      className={`flex-1 bg-primary-light ${ignoreTabBar ? "" : "pb-[72px]"}`}
    >
      <SafeAreaView className="px-5">{children}</SafeAreaView>
    </View>
  );
};

export default ScreenView;
