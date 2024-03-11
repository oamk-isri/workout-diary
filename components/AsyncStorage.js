import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const saveExercise = async (exercise) => {
    try {
        let exercises = await AsyncStorage.getItem('exercises');
        exercises = exercises ? JSON.parse(exercises) : [];
        exercises.push(exercise);
        await AsyncStorage.setItem('exercises', JSON.stringify(exercise));
    } catch (error) {
        console.error('Error saving exercise:', error);
    }
};

export const getExercises = async () => {
    try {
        const exercises = await AsyncStorage.getItem('exercises');
        return /* exercises ? JSON.parse(exercises) : */ [];
    } catch (error) {
        console.error('Error getting exercises:', error);
        return [];
    }
};

export const clearExercises = async () => {
    try {
        await AsyncStorage.removeItem('exercises');
        console.log('Exercises cleared successfully');
    } catch (error) {
        console.error('Error clearing exercises:', error);
    }
};