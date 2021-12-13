import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'
import FlatListComponent from '../components/FlatListComponent';

const nomeInstituicao = 'Unicap'
const curso = 'Sistemas para Internet'
const area = 'Tecnologia da Informação'
const dataIncio = '2020.1'
const dataFim = '2022.1'

const nomeInstituicao2 = 'UFPE (Universidade Federal de Pernambuco)'
const curso2 = 'Engenharia Mecânica'
const area2 = 'Engenharia'
const dataIncio2 = '2009.1'
const dataFim2 = '2017.1'

const nomeInstituicao3 = 'CCE - PUC Rio'
const curso3 = 'Curso de Extensão Energia Solar Fotovoltaica'
const area3 = 'Tecnologia em Energia Solar'
const dataIncio3 = '2009.1'
const dataFim3 = '2017.1'

export function AcademicScreen({navigation}) {
  return(
    <View style={styles.container}>
        <Text>ACADEMIC</Text>
        <FlatListComponent></FlatListComponent>
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