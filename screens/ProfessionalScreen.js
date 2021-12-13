import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from 'react-native-paper';

import CardComponent from '../components/CardComponent';


const nomeEmpresa = 'Roadmapps'
const urlSiteEmpresa = 'https://www.rdmapps.com.br/'
const urlLogoEmpresa = 'https://www.rdmapps.com.br/assets/square-rosa-a0f279ac8dcf3b756490606225c4cfb674bc69554bb2bf4dae1a55107db4c769.png'
const urlPhotoCoverEmpresa = 'https://media-exp1.licdn.com/dms/image/C4E1BAQFKD2LSAV4fiQ/company-background_10000/0/1580836546633?e=1639468800&v=beta&t=E1SiVrPz8Q0u8mPsvPJEJYd3DjNnk1eLLEpEfdVNdp4'
const localidade = 'Recife, PE'
const cargo = 'Dev Android Júnior'
const setor = 'Desenvolvimento de Software'
const tipoDeEmprego = 'Período Integral'
const dataInicio = 'out/2021'
const dataFim = 'atual'

const nomeEmpresa2 = 'Roadmapps' 
const urlSiteEmpresa2 = 'https://www.rdmapps.com.br/'
const urlLogoEmpresa2 = 'https://www.rdmapps.com.br/assets/square-rosa-a0f279ac8dcf3b756490606225c4cfb674bc69554bb2bf4dae1a55107db4c769.png'
const urlPhotoCoverEmpresa2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0KRpQEf1x2HOD8Vcn1tkOmp-K1q9X5rbLtU0PoBw_-iwS3vwsoP1OznlD9OiTjb2C24&usqp=CAU'
const localidade2 = 'Recife, PE'
const cargo2 = 'Dev Android Estagiária'
const setor2 = 'Desenvolvimento de Software'
const tipoDeEmprego2 = 'Estágio'
const dataInicio2 = 'out/2020'
const dataFim2 = 'out/2021'

//Roadmapps
//Duração total1 ano 3 meses
//CargoDesenvolvedora Android Júnior
//Tempo integral
//Período do empregoout. de 2021 – o momento
//Duração3 meses
//LocalidadeRecife, Pernambuco, Brasil
//Desenvolvimento de Aplicações Mobile Android nativamente com Kotlin e Java, através do Android Studio

export function ProfessionalScreen({navigation}) {
  return(
    <SafeAreaView >
    <ScrollView >
        <CardComponent style={styles.card}
            title={cargo}
            subtitle={tipoDeEmprego}
            local={nomeEmpresa}
            dataInicio={dataInicio}
            dataFim={dataFim}
            urlLinkButton={urlSiteEmpresa}
            urlPhotoAvatar={urlLogoEmpresa}
            urlPhotoCover={urlPhotoCoverEmpresa}>
        </CardComponent>

        <Divider />

        <CardComponent
            title={cargo2}
            subtitle={tipoDeEmprego2}
            local={nomeEmpresa2}
            dataInicio={dataInicio2}
            dataFim={dataFim2}
            urlLinkButton={urlSiteEmpresa2}
            urlPhotoAvatar={urlLogoEmpresa2}
            urlPhotoCover={urlPhotoCoverEmpresa2}>
        </CardComponent>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   card:{
     padding: 200
   }
});