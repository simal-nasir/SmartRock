import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: 'Home' }}
      />
    </Drawer.Navigator>
  );
}