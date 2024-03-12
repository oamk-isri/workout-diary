import AsyncStorage from "@react-native-async-storage/async-storage";

const setStorage = async (data) => {
    try {
        await AsyncStorage.setItem('exercises', JSON.stringify(data));

    } catch (error) {
        console.error("Error setting data to AsyncStorage:", error);
    }
}

const getStorage = async () => {
    try {
        const data = await AsyncStorage.getItem('exercises');
        return data ? JSON.parse(data) : [];

    } catch (error) {
        console.error("Error getting data from AsyncStorage:", error);
        return [];
    }
}

export {setStorage, getStorage}