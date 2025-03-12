import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/Landing';
import LoginPage from './screens/Login';
import HomePage from './screens/Home';
import NewProject from './screens/NewProject';
import ProjectDetail from './screens/ProjectDetail';

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
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="NewProject" component={NewProject} />
        <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}