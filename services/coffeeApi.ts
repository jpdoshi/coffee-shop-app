import axios from "axios";
import { endpoint } from "./config";

export const getCoffeeCategories = async () => {
  try {
    const categories = await axios.get(`${endpoint}/coffee/categories`);
    return categories?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCoffeeById = async (_id: string) => {
  try {
    const coffeeData = await axios.get(`${endpoint}/coffee/${_id}`);
    return coffeeData?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCoffeeByCategory = async (category: string) => {
  try {
    const coffeeData = await axios.get(
      `${endpoint}/coffee/category/${category}`
    );
    return coffeeData?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getOrdersByEmail = async (email: string) => {
  try {
    const ordersData = await axios.post(`${endpoint}/order/email`, { email });
    let orders = [];

    for (let order of ordersData?.data) {
      const coffeeData = await axios.get(`${endpoint}/coffee/${order.item}`);
      const { price, count, _id, address } = order;

      orders.push({ ...coffeeData?.data, price, count, orderId: _id, address });
    }
    return orders;
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = async (
  email: string,
  coffeeId: string,
  price: number,
  count: number
) => {
  try {
    const ordersData = await axios.post(`${endpoint}/order/`, {
      email,
      coffeeId,
      price,
      count,
    });
    return ordersData?.data;
  } catch (err) {
    console.log(err);
  }
};

export const cancelOrder = async (id: string) => {
  try {
    const order = await axios.delete(`${endpoint}/order/${id}`);
    return order?.data;
  } catch (err) {
    console.log(err);
  }
};
