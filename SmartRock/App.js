import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/Landing';
import LoginPage from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
            screenOptions={{ headerShown: false,gestureEnabled: true, }}
            initialRouteName="LandingPage"
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginPage}
         options={{ gestureEnabled: true,}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}