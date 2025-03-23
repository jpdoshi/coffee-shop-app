import { useCallback, useRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

import ScreenView from "@/components/ScreenView";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const SearchBar = () => (
  <View className="bg-white rounded-xl px-3 flex-row items-center py-1.5 gap-1 shadow">
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
    >
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
    <TextInput
      placeholder="Search coffee"
      className="placeholder:text-tertiary font-medium flex-1 text-base"
    />
  </View>
);

const index = () => {
  const modalRef = useRef(null);

  const showModal = useCallback(() => {
    modalRef.current?.present();
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheetModalProvider>
        <ScreenView>
          {/* top section */}
          <View className="py-6">
            <Text className="text-tertiary">Location</Text>
            <Pressable
              className="flex-row items-center mb-4"
              onPress={showModal}
            >
              <Text className="font-semibold text-lg">Rajkot, Gujarat</Text>
              <Svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <G id="SVGRepo_iconCarrier">
                  <Path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#000000"
                  />
                </G>
              </Svg>
            </Pressable>
            <SearchBar />
          </View>

          {/* categories */}

          {/* cards list */}
        </ScreenView>
        <BottomSheetModal ref={modalRef}>
          <BottomSheetView className="items-center h-[50vh]">
            <Text>Show Cities List</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default index;
