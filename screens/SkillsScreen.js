import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'

export function SkillsScreen({navigation}) {
  return(
    <View style={styles.container}>
        <Text>SKILLS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
});