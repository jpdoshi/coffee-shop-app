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
