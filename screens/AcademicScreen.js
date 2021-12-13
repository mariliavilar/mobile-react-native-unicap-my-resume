import React from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

import CardComponent from '../components/CardComponent';


export function AcademicScreen() {
  return(
    <SafeAreaView >
    <ScrollView >
        <CardComponent
            title={curso}
            subtitle={area}
            local={nomeInstituicao}
            dataInicio={dataInicio}
            dataFim={dataFim}
            urlLinkButton={urlSiteInstituicao}
            urlPhotoAvatar={urlLogoInstituicao}
            urlPhotoCover={urlPhotoCoverInstituicao}>
        </CardComponent>

        <Divider />

        <CardComponent
            title={curso3}
            subtitle={area3}
            local={nomeInstituicao3}
            dataInicio={dataInicio3}
            dataFim={dataFim3}
            urlLinkButton={urlSiteInstituicao3}
            urlPhotoAvatar={urlLogoInstituicao3}
            urlPhotoCover={urlPhotoCoverInstituicao3}>
        </CardComponent>

        <Divider/>

        <CardComponent
            title={curso2}
            subtitle={area2}
            local={nomeInstituicao2}
            dataInicio={dataInicio2}
            dataFim={dataFim2}
            urlLinkButton={urlSiteInstituicao2}
            urlPhotoAvatar={urlLogoInstituicao2}
            urlPhotoCover={urlPhotoCoverInstituicao2}>
        </CardComponent>

    </ScrollView>
    </SafeAreaView>
  )
}



//dados estáticos
const nomeInstituicao = 'Unicap'
const urlSiteInstituicao = 'https://portal.unicap.br/'
const urlLogoInstituicao = 'https://www.rdmapps.com.br/assets/square-rosa-a0f279ac8dcf3b756490606225c4cfb674bc69554bb2bf4dae1a55107db4c769.png'
const urlPhotoCoverInstituicao = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeNKLP51jFxJBsr5mTps-atzkbcjfiPENlw&usqp=CAU'
const curso = 'Sistemas para Internet'
const area = 'Tecnologia da Informação'
const dataInicio = '2020.1'
const dataFim = '2022.1'

const nomeInstituicao2 = 'UFPE (Universidade Federal de Pernambuco)'
const urlSiteInstituicao2 = 'https://www.ufpe.br/'
const urlLogoInstituicao2 = 'https://www.rdmapps.com.br/assets/square-rosa-a0f279ac8dcf3b756490606225c4cfb674bc69554bb2bf4dae1a55107db4c769.png'
const urlPhotoCoverInstituicao2 = 'https://www.ufpe.br/documents/20181/23844/imgExemploListaDestaqueVertical_1.png/d8ee4069-5883-475c-a3d7-a820c4a46dbc?t=1464113490000'
const curso2 = 'Engenharia Mecânica'
const area2 = 'Engenharia'
const dataInicio2 = '2009.1'
const dataFim2 = '2017.1'

const nomeInstituicao3 = 'CCE - PUC Rio'
const urlSiteInstituicao3 = 'https://cce.puc-rio.br/'
const urlLogoInstituicao3 = 'https://www.rdmapps.com.br/assets/square-rosa-a0f279ac8dcf3b756490606225c4cfb674bc69554bb2bf4dae1a55107db4c769.png'
const urlPhotoCoverInstituicao3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3XCgzqXwOt-lnWncWKw5tGb90QOEbWAcoQ&usqp=CAU'
const curso3 = 'Curso de Extensão Energia Solar Fotovoltaica'
const area3 = 'Tecnologia em Energia Solar'
const dataInicio3 = '2019'
const dataFim3 = '2019'