import React from 'react';
import { ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import ListAccordionComponent from '../components/ListAccordionComponent';

export function SkillsScreen() {
  return(
    <SafeAreaView >
    <ScrollView >
        <ListAccordionComponent/>
    </ScrollView>
    </SafeAreaView>
  )
}