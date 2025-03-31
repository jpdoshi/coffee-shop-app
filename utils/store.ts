import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSavedItems = async () => {
  try {
    const data = await AsyncStorage.getItem("saved");

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

    if (!data?.includes(id)) {
      // @ts-ignore
      data?.push(id);
    }

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

export const getUserDetails = async () => {
  try {
    let data: any = await AsyncStorage.getItem("user");

    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};

export const setUserDetails = async (userData: any) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(userData));
  } catch (err) {
    console.log(err);
  }
};

export const removeKey = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
