import React, { useState, useEffect } from "react";
import { FAB, Modal, Portal, List, IconButton, Appbar, Dialog, Button, Surface, Divider } from "react-native-paper";
import { View, Text, Alert, ScrollView } from "react-native";
import styles from "../style/styles";
import AddWorkout from "./AddWorkout";
import { getStorage, setStorage } from "./AsyncStorage";
import { ExercisesContext, SettingsContext, ModalContext } from "./Contexts";
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

  const sumExercise = (type) => {
    const list = [...exercises];

    const distances = list
      .filter(exercise => exercise.exercise === type)
      .map(exercise => parseFloat(exercise.distance));

    const sum = distances.reduce((total, distance) => total + distance, 0);
    return sum;
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

      <View style={styles.surfaceContainer}>
        <Surface mode="flat" style={styles.surface} elevation={1}>
          <View style={styles.surfaceContent}>
            <MaterialCommunityIcons name="run" size={30} color="black" />
            {isMiles ? (
              <Text style={styles.surfaceText}>
                {(sumExercise("run") * KM_TO_MI_MULT).toFixed(1)} mi
              </Text>
            ) : (
              <Text style={styles.surfaceText}>
                {sumExercise("run").toFixed(1)} km
              </Text>
            )}
          </View>          
        </Surface>
        <Surface mode="flat" style={styles.surface} elevation={1}>
          <View style={styles.surfaceContent}>
            <MaterialCommunityIcons name="bike" size={30} color="black" />
            {isMiles ? (
              <Text style={styles.surfaceText}>
                {(sumExercise("bike") * KM_TO_MI_MULT).toFixed(1)} mi
              </Text>
            ) : (
              <Text style={styles.surfaceText}>
                {sumExercise("bike").toFixed(1)} km
              </Text>
            )}
          </View>   
        </Surface>
        <Surface mode="flat" style={styles.surface} elevation={1}>
          <View style={styles.surfaceContent}>
            <MaterialCommunityIcons name="swim" size={30} color="black" />
            {isMiles ? (
              <Text style={styles.surfaceText}>
                {(sumExercise("swim") * KM_TO_MI_MULT).toFixed(1)} mi
              </Text>
            ) : (
              <Text style={styles.surfaceText}>
                {sumExercise("swim").toFixed(1)} km
              </Text>
            )}
          </View>   
        </Surface>
      </View>
      
      <ScrollView>
        <List.Section>
          {exercises.map((exercise, index) => (
            <List.Item
              style={styles.listItem}
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
                    <MaterialCommunityIcons name="map-marker-distance" size={20} color="black" />
                    
                    {isMiles ? (
                      <Text style={styles.titleSmaller}>
                        {(Number(exercise.distance * KM_TO_MI_MULT).toFixed(2)).toString()} mi
                      </Text>
                    ) : (
                      <Text style={styles.titleSmaller}>
                        {(Number(exercise.distance).toFixed(2)).toString()} km
                      </Text>
                    )}
                    
                  </View>

                  <View style={styles.listDescription}>
                    <MaterialCommunityIcons name="clock-outline" size={20} color="black" />
                    <Text style={styles.titleSmaller}>{exercise.duration} min</Text>
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
        <ModalContext.Provider value={{modalToggle, setModalToggle}}>
        <Modal visible={modalToggle} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <ExercisesContext.Provider value={{ exercises, setExercises }}>
            <SettingsContext.Provider value={{ isMiles, setIsMiles }}>
              <AddWorkout />
            </SettingsContext.Provider>
          </ExercisesContext.Provider>
        </Modal>
        </ModalContext.Provider>
      </Portal>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={showModal}
      />
    </View>
  )
}