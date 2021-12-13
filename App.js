import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { HomeScreen } from './screens/HomeScreen'
import { AcademicScreen } from './screens/AcademicScreen'
import { ProfessionalScreen } from './screens/ProfessionalScreen'
import { SkillsScreen } from './screens/SkillsScreen'
import { ExtraActivitiesScreen } from './screens/ExtraActivitiesScreen'



export default function App() {
  return (
    <NavigationContainer>
      <MyTabMaterialNavigation/>
    </NavigationContainer>
  );
}


const Tab = createMaterialBottomTabNavigator();

function MyTabMaterialNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Academic" component={AcademicScreen} />
      <Tab.Screen name="Professional" component={ProfessionalScreen} />
      <Tab.Screen name="Skills" component={SkillsScreen} />   
      <Tab.Screen name="ExtraActivities" component={ExtraActivitiesScreen} />      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
