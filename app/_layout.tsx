import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        navigationBarColor: "white",
        navigationBarTranslucent: true,
        statusBarBackgroundColor: "transparent",
        statusBarTranslucent: true,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="coffee/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="order" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
}
