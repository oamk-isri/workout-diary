import React, { useState, useEffect } from "react";
import { FAB, Modal, Portal, List, IconButton } from "react-native-paper";
import { View } from "react-native";
import styles from "../style/styles";
import AddWorkout from "./AddWorkout";
import { getExercises, saveExercise, clearExercises } from "./AsyncStorage";


export default Header = () => {


    const [exercises, setExercises] = useState([]);

    // AddWorkout modal
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    useEffect(() => {
        // Fetch exercises when the component mounts
        fetchExercises();
    }, []);

    const fetchExercises = async () => {
        try {
            const exerciseData = await getExercises();
            setExercises(exerciseData);
        } catch (error) {
            console.error('Error fetching exercises:', error);
        }
    };

    const removeAll = async () => {
        try {
            await clearExercises();
            setExercises([]);
        } catch {
            console.error("error:", error);
        }
    }

    const removeExercise = async (index) => {
        try {
            const updatedExercises = [...exercises];
            updatedExercises.splice(index, 1);
            setExercises(updatedExercises);
            await saveExercise(updatedExercises); // Save updated list to AsyncStorage
        } catch (error) {
            console.error('Error removing exercise:', error);
        }
    };

    return (
        
        <View style={{ flex: 1}}>

            
            <List.Section>
                <List.Subheader>Exercises</List.Subheader>
                {exercises.map((exercise, index) => (
                    <List.Item
                        key={index.toString()}
                        title={exercise.exercise}
                        description={
                            `Distance: ${exercise.distance}, Duration: ${exercise.duration}, Date: ${exercise.date}`
                        }
                        right={() => (
                            <IconButton
                            icon="delete"
                            onPress={() => removeExercise(index)}
                            />
                        )}
                    />
                ))}
            </List.Section>
            

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                    <AddWorkout />
                </Modal>
            </Portal>
            <FAB
            icon="plus"
            style={styles.fab}
            onPress={showModal}
            />
            <FAB
            icon="delete"
            style={styles.delete}
            onPress={removeAll}
            />
            <FAB
            icon="reload"
            style={styles.reload}
            onPress={fetchExercises}
            />
        </View>
        
    )
}