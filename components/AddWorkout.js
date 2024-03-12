import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Text, TextInput, SegmentedButtons, Button } from "react-native-paper";
import styles from "../style/styles";
import { DatePickerInput, enGB, registerTranslation } from "react-native-paper-dates";
registerTranslation('en-GB', enGB)

import { ExercisesContext, SettingsContext } from "./Contexts";
import { setStorage } from "./AsyncStorage";
import { MI_TO_KM_MULT } from "../constants/Diary";

export default AddWorkout = () => {

  const [exercise, setExercise] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [inputDate, setInputDate] = useState(undefined);

  const { exercises, setExercises } = useContext(ExercisesContext);
  const { isMiles, setIsMiles } = useContext(SettingsContext);

  const ExerciseItem = {
    exercise: exercise,
    distance: distance,
    duration: duration,
    date: inputDate
  }

  const handleWorkout = (index) => {
    const updatedExercises = [...exercises];
    console.log(index)
    updatedExercises.push(index)
    console.log(updatedExercises)
    setExercises(updatedExercises);
    setStorage(updatedExercises)
  }

  const handleDistance = (distance) => {
    if (isMiles) {
      setDistance(Number(distance) * MI_TO_KM_MULT)
    } else {
      setDistance(distance)
    }
  }

  return (
    <View>
      <Text style={styles.title}>Add Workout</Text>
      <SegmentedButtons
        value={exercise}
        onValueChange={setExercise}
        buttons={[
          { value: 'run', label: 'Running' },
          { value: 'bike', label: 'Biking' },
          { value: 'swim', label: 'Swimming' }
        ]}
      />

      <TextInput
        mode="outlined"
        label={isMiles ? "Distance (Miles)" : "Distance (Kilometers)"}
        value={distance}
        onChangeText={distance => handleDistance(distance)}
        keyboardType="numeric"
      />

      <TextInput
        mode="outlined"
        label="Duration (Minutes)"
        value={duration}
        onChangeText={duration => setDuration(duration)}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <View style={styles.datePicker}>
        <DatePickerInput
          mode="outlined"
          presentationStyle="pageSheet"
          locale="en-GB"
          label="Date"
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode="start"
        />
      </View>
      <Button
        mode="outlined"
        onPress={() => handleWorkout(ExerciseItem)}
      >
        Add workout
      </Button>
    </View>
  )
}