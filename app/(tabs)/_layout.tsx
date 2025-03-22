import React from "react";
import { Dimensions, StatusBar } from "react-native";
import { Tabs } from "expo-router";

import HomeIcon from "@/components/Icons/HomeIcon";
import AccountIcon from "@/components/Icons/AccountIcon";

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            marginBottom:
              Dimensions.get("screen").height -
              Dimensions.get("window").height -
              (StatusBar.currentHeight || 0),
            height: 64,
          },
          tabBarShowLabel: false,
          tabBarItemStyle: {
            flexDirection: "row",
            alignItems: "center",
            height: 64,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <HomeIcon size={24} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            headerShown: false,
            title: "Account",
            tabBarIcon: ({ focused }) => (
              <AccountIcon size={24} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
