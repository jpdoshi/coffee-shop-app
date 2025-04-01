import OrderCoffee from "@/components/OrderCoffee";
import ScreenView from "@/components/ScreenView";
import { getOrdersByEmail } from "@/services/coffeeApi";
import { getUserDetails } from "@/utils/store";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const cart = () => {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    const fetchSaved = async () => {
      const { email } = await getUserDetails();
      const data = await getOrdersByEmail(email);
      let _orders = [];

      // @ts-ignore
      for (let o of data) {
        _orders.push({
          id: o._id,
          count: o.count,
          price: o.price,
          address: o.address,
          orderId: o.orderId,
        });
      }
      setOrders(_orders || []);
    };

    fetchSaved();
  }, []);

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[64px] justify-between flex-row items-center mx-5">
          <Text className="text-2xl font-bold">Your Orders</Text>
        </View>
        <View className="flex-col gap-2 mx-5 pb-4">
          {orders && orders.length > 0 ? (
            orders.map((item: any, index: number) => (
              <OrderCoffee
                key={index}
                item={item}
                orders={orders}
                fetchOrders={async () => {
                  const { email } = await getUserDetails();
                  const data = await getOrdersByEmail(email);
                  let _orders = [];

                  // @ts-ignore
                  for (let o of data) {
                    _orders.push({
                      id: o._id,
                      count: o.count,
                      price: o.price,
                      address: o.address,
                      orderId: o.orderId,
                    });
                  }
                  setOrders(_orders || []);
                }}
              />
            ))
          ) : (
            <View className="h-[50vh] justify-center items-center gap-2">
              <Text className="text-tertiary font-medium text-lg">
                No Orders
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default cart;
