import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'

export function HomeScreen({navigation}) {
  return(
    <View style={styles.container}>
        <Text>HOME</Text>
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