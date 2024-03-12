import React from 'react';
import { PaperProvider } from 'react-native-paper';
import WorkoutList from './components/WorkoutList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { customPaper } from './style/styles';

export default function App() {

  return (
    <SafeAreaProvider>
      <PaperProvider theme={customPaper.colors}>
      
        <WorkoutList />
      
      </PaperProvider>
    </SafeAreaProvider>
  )
}