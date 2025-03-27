import React from "react";
import { Dimensions, StatusBar, View } from "react-native";
import { Tabs } from "expo-router";

import HomeIcon from "@/components/Icons/HomeIcon";
import BellIcon from "@/components/Icons/BellIcon";
import HeartIcon from "@/components/Icons/HeartIcon";
import BagIcon from "@/components/Icons/BagIcon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const Layout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheetModalProvider>
        <Tabs
          screenOptions={{
            tabBarStyle: {
              marginBottom:
                Dimensions.get("screen").height -
                Dimensions.get("window").height -
                (StatusBar.currentHeight || 0),
              height: 72,
              borderColor: "white",
              position: "absolute",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            tabBarShowLabel: false,
            tabBarItemStyle: {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "transparent",
              height: 72,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              title: "Home",
              tabBarIcon: ({ focused }) => (
                <View className="flex-col items-center">
                  <View className="h-[28px]">
                    <HomeIcon size={22} focused={focused} />
                  </View>
                  <View
                    className={`h-1 w-3 bg-primary-color rounded-full ${
                      focused ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="liked"
            options={{
              headerShown: false,
              title: "Liked",
              tabBarIcon: ({ focused }) => (
                <View className="flex-col items-center">
                  <View className="h-[28px]">
                    <HeartIcon size={24} focused={focused} />
                  </View>
                  <View
                    className={`h-1 w-3 bg-primary-color rounded-full ${
                      focused ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="cart"
            options={{
              headerShown: false,
              title: "Cart",
              tabBarIcon: ({ focused }) => (
                <View className="flex-col items-center">
                  <View className="h-[28px]">
                    <BagIcon size={24} focused={focused} />
                  </View>
                  <View
                    className={`h-1 w-3 bg-primary-color rounded-full ${
                      focused ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="notification"
            options={{
              headerShown: false,
              title: "Notifications",
              tabBarIcon: ({ focused }) => (
                <View className="flex-col items-center">
                  <View className="h-[28px]">
                    <BellIcon size={24} focused={focused} />
                  </View>
                  <View
                    className={`h-1 w-3 bg-primary-color rounded-full ${
                      focused ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </View>
              ),
            }}
          />
        </Tabs>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;
