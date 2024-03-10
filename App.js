import React from 'react';
import { View } from 'react-native';
import styles from './style/styles';
import WorkoutList from './components/WorkoutList';

export default function App() {
  return (
    <View style={styles.container}>
      <WorkoutList/>
    </View>
  )
}