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
