import {
  View,
  Text,
  ScrollView,
  Pressable,
  BackHandler,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ScreenView from "@/components/ScreenView";
import Svg, { Circle, Path } from "react-native-svg";
import { useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebaseConfig";
import { setUserDetails } from "@/utils/store";

import { reloadAsync } from "expo-updates";

const login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const onSubmit = () => {
    let _errors = { email: "", password: "" };

    if (!email.trim()) {
      _errors.email = "Username is required field";
    } else {
      _errors.email = "";
    }
    if (!password.trim()) {
      _errors.password = "Password is required field";
    } else {
      _errors.password = "";
    }

    setErrors(_errors);

    if (email.trim() && password.trim()) {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const userDetails = userCredential.user;

          await setUserDetails(userDetails);
          await reloadAsync();
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center mx-5 gap-3">
          <Pressable onPress={() => BackHandler.exitApp()}>
            <View className="rounded-full bg-[#eee] p-0.5">
              <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#0F0F0F"
                />
              </Svg>
            </View>
          </Pressable>
          <Text className="text-2xl font-bold">Login</Text>
        </View>
        <View className="flex-col mt-16 px-5 justify-center items-center">
          <Svg height={64} width={64} viewBox="0 0 32 32">
            <Circle
              cx="16"
              cy="16"
              fill="none"
              r="15"
              stroke="#242424"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <Path
              d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
              fill="none"
              stroke="#242424"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <Circle
              cx="16"
              cy="11"
              fill="none"
              r="6"
              stroke="#242424"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </Svg>
          <View className="flex-col w-full py-20">
            <Text className="pl-2 font-bold mb-2">Enter Email</Text>
            <View className="shadow shadow-primary-shadow border border-[#eee] p-2 px-4 bg-white rounded-2xl">
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder="e.g: jon@doe.com"
                className="placeholder:text-tertiary"
              />
            </View>
            {errors.email != "" && (
              <Text className="text-sm pl-2 mt-1 text-red-600">
                {errors.email}
              </Text>
            )}

            <Text className="pl-2 font-bold mt-6 mb-2">Enter Password</Text>
            <View className="shadow shadow-primary-shadow border border-[#eee] p-2 px-4 bg-white rounded-2xl">
              <TextInput
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="************"
                className="placeholder:text-tertiary"
              />
            </View>
            {errors.password != "" && (
              <Text className="text-sm pl-2 mt-1 text-red-600">
                {errors.password}
              </Text>
            )}
          </View>
          <View className="justify-center items-center w-full flex-row gap-1">
            <Text className="font-medium">Don't have an Account?</Text>
            <Pressable onPress={() => router.navigate("/signup")}>
              <Text className="text-primary-color font-bold">Create Now!</Text>
            </Pressable>
          </View>
          <TouchableOpacity
            onPress={onSubmit}
            activeOpacity={0.5}
            className="w-full"
          >
            <View className="w-full bg-primary-color p-4 rounded-2xl justify-between items-center mt-3">
              <Text className="text-white text-lg font-bold">Proceed</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default login;
