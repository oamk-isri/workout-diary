import React, { useState, useEffect } from "react";
import { FAB, Modal, Portal, List, IconButton } from "react-native-paper";
import { View, Text, Alert } from "react-native";
import styles from "../style/styles";
import AddWorkout from "./AddWorkout";
import { getStorage, setStorage } from "./AsyncStorage";
import { ExercisesContext } from "./Contexts";

export default Header = () => {

    const [exercises, setExercises] = useState([]);

    // AddWorkout modal
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const removeExercise = (index) => {
        const updatedExercises = [...exercises];
        updatedExercises.splice(index, 1);
        setExercises(updatedExercises);
        setStorage(updatedExercises);
    };

    useEffect(() => {
        getStorage().then(setExercises);
    }, [])

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
                            onPress={() => removeExercise(index) }
                            />
                        )}
                    />
                ))}
            </List.Section>

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                   <ExercisesContext.Provider value={{exercises, setExercises}}>
                   <    AddWorkout />
                   </ExercisesContext.Provider>
                </Modal>
            </Portal>
            <FAB
            icon="plus"
            style={styles.fab}
            onPress={showModal}
            />
        </View>
        
    )
}