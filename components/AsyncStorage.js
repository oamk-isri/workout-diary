import AsyncStorage from "@react-native-async-storage/async-storage";
import { DEFAULT_EXERCISES } from "../constants/Diary";

const setStorage = async (data) => {
  try {
    await AsyncStorage.setItem("exercises", JSON.stringify(data));

  } catch (error) {
    console.error("Error setting data to AsyncStorage:", error);
  }
}

const getStorage = async () => {
  try {
    const data = await AsyncStorage.getItem("exercises");
    return data ? JSON.parse(data) : DEFAULT_EXERCISES;

  } catch (error) {
    console.error("Error getting data from AsyncStorage:", error);
    return DEFAULT_EXERCISES;
  }
}

const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem("exercises");
  } catch (error) {
    console.error("Error removing data from AsyncStorage:", error);
  }
}

export { setStorage, getStorage, clearStorage }