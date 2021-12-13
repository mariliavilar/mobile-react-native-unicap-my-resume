import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { HomeScreen } from '../screens/HomeScreen'
import { AcademicScreen } from '../screens/AcademicScreen'
import { ProfessionalScreen } from '../screens/ProfessionalScreen'
import { SkillsScreen } from '../screens/SkillsScreen'
import { ExtraActivitiesScreen } from '../screens/ExtraActivitiesScreen'

const Tab = createMaterialBottomTabNavigator();

export function MyTabMaterialNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='white'
      barStyle={{ backgroundColor: 'indigo' }}>
        
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="face-woman" color={color} size={26} />
            ),
          }} 
        />
        
        <Tab.Screen
          name='Academic'
          component={AcademicScreen}
          options={{
            tabBarLabel: 'Acadêmico',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="school" color={color} size={26} />
            ),
          }} 
        />
        
        <Tab.Screen
          name='Professional'
          component={ProfessionalScreen} 
          options={{
            tabBarLabel: 'Professional',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="briefcase" color={color} size={26} />
            ),
          }} 
        />
        
        <Tab.Screen
          name='Skills'
          component={SkillsScreen}
          options={{
            tabBarLabel: 'Competências',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
            ),
          }} 
        />   
        
        <Tab.Screen
          name='ExtraActivities'
          component={ExtraActivitiesScreen}
          options={{
            tabBarLabel: 'Extras',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="hand-heart" color={color} size={26} />
            ),
          }} 
        />      
    </Tab.Navigator>
  );
}