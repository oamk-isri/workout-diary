import React from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import styles from './style/styles';
import WorkoutList from './components/WorkoutList';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
      
        <WorkoutList />
      
      </PaperProvider>
    </SafeAreaProvider>
  )
}