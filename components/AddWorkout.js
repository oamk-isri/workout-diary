import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, SegmentedButtons, Button } from "react-native-paper";
import styles from "../style/styles";
import { DatePickerInput, enGB, registerTranslation } from "react-native-paper-dates";
registerTranslation('en-GB', enGB)

import { saveExercise } from "./AsyncStorage";

export default Header = () => {

    const [exercise, setExercise] = useState("");
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [inputDate, setInputDate] = useState(undefined);

    const ExerciseItem = {
        exercise: exercise,
        distance: distance,
        duration: duration,
        date: inputDate
    }

    return (
        <View>
            <Text style={styles.title}>Add Workout</Text>
            <SegmentedButtons
            value={exercise}
            onValueChange={setExercise}
            buttons={[
                {value: 'run', label: 'Running' },
                {value: 'bike', label: 'Biking'},
                {value: 'swim', label: 'Swimming'}
            ]}
            />

            <TextInput
            mode="outlined"
            label="Distance"
            value={distance}
            onChangeText={distance => setDistance(distance)}
            keyboardType="numeric"
            />

            <TextInput
            mode="outlined"
            label="Duration"
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
            onPress={() => saveExercise(ExerciseItem)}
            >
                Add workout
            </Button>
        </View>
    )
}