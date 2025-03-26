import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSavedItems = async () => {
  try {
    const data = await AsyncStorage.getItem("saved");
    // console.log("store.ts: data: " + data);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};

export const addStoreItem = async (id: string) => {
  try {
    let data: string | string[] | null = await AsyncStorage.getItem("saved");

    if (data) {
      data = JSON.parse(data);
    } else {
      data = [];
    }
    if (!data?.includes(id)) data?.push(id);

    await AsyncStorage.setItem("saved", JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

export const removeStoreItem = async (id: string) => {
  try {
    let data: any = await AsyncStorage.getItem("saved");

    if (data) data = JSON.parse(data);
    data = data.filter((item: string) => item !== id);

    await AsyncStorage.setItem("saved", JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};
