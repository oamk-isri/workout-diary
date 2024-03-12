import React, { useState, useEffect } from "react";
import { FAB, Modal, Portal, List, IconButton, Appbar, Dialog, Button } from "react-native-paper";
import { View, Text, Alert, ScrollView } from "react-native";
import styles from "../style/styles";
import AddWorkout from "./AddWorkout";
import { getStorage, setStorage } from "./AsyncStorage";
import { ExercisesContext, SettingsContext } from "./Contexts";
import Settings from "./Settings";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KM_TO_MI_MULT } from "../constants/Diary";

export default WorkoutList = () => {

  const [exercises, setExercises] = useState([]);

  const [isMiles, setIsMiles] = useState(false);

  // Settings dialog
  const [dialogToggle, setDialogToggle] = useState(false);
  const showDialog = () => setDialogToggle(true);
  const hideDialog = () => setDialogToggle(false);

  // AddWorkout modal
  const [modalToggle, setModalToggle] = useState(false);
  const showModal = () => setModalToggle(true);
  const hideModal = () => setModalToggle(false);

  const removeExercise = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
    setStorage(updatedExercises);
  };

  useEffect(() => {
    getStorage().then(setExercises);
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }

  const formatDuration = (duration) => {
    
  }

  return (

    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Workout Diary" />
        <Appbar.Action icon="cog" onPress={showDialog} />
      </Appbar.Header>

      <Portal>
        <Dialog visible={dialogToggle} onDismiss={hideDialog}>
          <Dialog.Title>Units</Dialog.Title>
          <Dialog.Content>
            <SettingsContext.Provider value={{ isMiles, setIsMiles }}>
              <Settings />
            </SettingsContext.Provider>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <ScrollView>
        <List.Section>
          {/* <List.Subheader>Exercises</List.Subheader> */}
          {exercises.map((exercise, index) => (
            <List.Item
              key={index.toString()}
              title={
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name={exercise.exercise} size={30} color="black" />
                  <Text style={styles.titleSmall}>{formatDate(exercise.date)}</Text>
                </View>
              }
              description={
                <View style={styles.listDescription}>
                  <View style={styles.listDescription}>
                    <MaterialCommunityIcons name="map-marker-distance" size={30} color="black" />
                    
                    {isMiles ? (
                      <Text style={styles.titleSmall}>
                        {(Number(exercise.distance * KM_TO_MI_MULT).toFixed(2)).toString()} mi
                      </Text>
                    ) : (
                      <Text style={styles.titleSmall}>
                        {(Number(exercise.distance).toFixed(2)).toString()} km
                      </Text>
                    )}
                    
                  </View>

                  <View style={styles.listDescription}>
                    <MaterialCommunityIcons name="clock-outline" size={30} color="black" />
                    <Text style={styles.titleSmall}>{exercise.duration} min</Text>
                  </View>
                </View>
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
      </ScrollView>

      <Portal>
        <Modal visible={modalToggle} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <ExercisesContext.Provider value={{ exercises, setExercises }}>
            <SettingsContext.Provider value={{ isMiles, setIsMiles }}>
              <AddWorkout />
            </SettingsContext.Provider>
          </ExercisesContext.Provider>
        </Modal>
      </Portal>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={showModal}
      />

      <View style={styles.reload}>
        {isMiles ? (
          <Text>Miles: true</Text>
        ) : (
          <Text>Miles: false</Text>
        )}
      </View>
    </View>

  )
}