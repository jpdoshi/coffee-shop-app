import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ScreenView from "@/components/ScreenView";
import Svg, { Circle, Path } from "react-native-svg";
import { useRouter } from "expo-router";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUserDetails } from "@/utils/store";
import { app } from "../firebaseConfig";
import { reloadAsync } from "expo-updates";

const signup = () => {
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
      createUserWithEmailAndPassword(auth, email.trim(), password.trim()).then(
        async (userCredentials) => {
          const userDetails = userCredentials.user;

          console.log(userDetails);
          await setUserDetails(userDetails);
          await reloadAsync();
        }
      );
    }
  };

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] flex-row items-center mx-5 gap-3">
          <Pressable onPress={() => router.back()}>
            <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <Path
                d="M5 12H19M5 12L11 6M5 12L11 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
          <Text className="text-2xl font-bold">Signup</Text>
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
          <TouchableOpacity
            onPress={onSubmit}
            activeOpacity={0.5}
            className="w-full"
          >
            <View className="w-full bg-primary-color p-4 rounded-2xl justify-between items-center">
              <Text className="text-white text-lg font-bold">
                Create Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default signup;
