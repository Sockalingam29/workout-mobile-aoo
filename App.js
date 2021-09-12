import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './screens/home';
import List from './screens/workouts';
import Pushups from './screens/pushups';
import Jumping from './screens/jumping';
import Finish from './screens/finish';

const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Home} />
        <Stack.Screen name="Start" component={List} />
        <Stack.Screen name="Pushups" component={Pushups} />
        <Stack.Screen name="Jumping Jacks" component={Jumping} />
        <Stack.Screen name="Thank you" component={Finish} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;