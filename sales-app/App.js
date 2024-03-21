// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './navigation/StackNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StackNavigator/>
  );
}

export default App;