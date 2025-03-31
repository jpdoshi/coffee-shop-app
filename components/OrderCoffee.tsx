import { View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import useFetch from "@/hooks/useFetch";
import { cancelOrder, getCoffeeById } from "@/services/coffeeApi";
import Svg, { Path } from "react-native-svg";

const OrderCoffee = ({ item, orders, fetchOrders }: any) => {
  const { data } = useFetch(() => getCoffeeById(item.id), orders);

  return (
    <Link href={`/coffee/${item.id}`}>
      <View className="flex-row w-full items-center justify-between p-2 bg-white rounded-2xl border border-[#eee] shadow shadow-primary-shadow">
        <View className="flex-row items-center gap-4">
          <Image
            source={{ uri: data?.imageUrl }}
            className="w-32 aspect-square rounded-xl"
          />
          <View className="flex-col">
            <Text className="text-2xl font-bold leading-tight">
              {data?.name}
            </Text>
            <View className="flex-row items-center gap-2 mt-1">
              <Text className="font-semibold">Items:</Text>
              <Text className="text-primary-color font-bold">
                {item?.count}
              </Text>
            </View>
            <View className="flex-row items-center gap-2 mt-1">
              <Text className="font-semibold">Total Price</Text>
              <Text className="text-primary-color font-bold">
                $ {item?.price.toFixed(2)}
              </Text>
            </View>
            <Pressable
              onPress={async () => {
                await cancelOrder(item?.orderId);
                await fetchOrders();
              }}
            >
              <View className="flex-row items-center mt-4">
                <Svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                    fill="#e7000b"
                  />
                </Svg>
                <Text className="text-red-600 font-medium text-sm">
                  Cancel Order
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default OrderCoffee;
