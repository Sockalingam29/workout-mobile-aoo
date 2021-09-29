import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './screens/home';
import Start from './screens/start';
import Pushups from './screens/pushups';
import Jumping from './screens/jumping';
import Finish from './screens/finish';
import Name from './screens/name';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Home} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Pushups" component={Pushups} />
        <Stack.Screen name="Jumping Jacks" component={Jumping} />
        <Stack.Screen name="Thank you" component={Finish} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  
  );
}

export default App;