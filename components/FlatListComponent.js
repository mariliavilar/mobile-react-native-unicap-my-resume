import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Caption, Paragraph, Subheading, Headline, Chip } from 'react-native-paper';


const Item = ({ title, local, area, description, tag }) => (
  <View style={styles.item}>
    <Chip icon="information">{tag}</Chip>
    <Headline>{title}</Headline>
    <Subheading>{local}</Subheading>
    <Caption>{area}</Caption>
    <Paragraph>{description}</Paragraph>
  </View>
);

const FlatListComponent = () => {
  const renderItem = ({ item }) => (
    <Item 
      title={item.title}
      local={item.local}
      area={item.area}
      description={item.description}
      tag={item.tag}  
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lavender',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'Dançarina Popular',
    local: 'Mexe com Tudo e Destramelar',
    area: 'Arte e Cultura', 
    initialDate: '',
    endDate: '',
    description: 'Dançarina de danças populares incluindo Frevo, Maracatu, Caboblinho, Coco, Xaxado, Ciranda, Reizado, Afro, Maculelê, entre outras',
    tag: 'ativa',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Contadora de Histórias Voluntária no Hospital Maria Lucinda',
    local: 'Associação Viva e Deixe Viver',
    area: 'Infantil', 
    initialDate: '07/2018',
    endDate: 'atual',
    description: 'Ação social com distribuição de café da manhã e apoio para pessoas em situação de rua e vulnerabilidade social, com foco no centro da cidade do Recife, na Praça do Diário.',
    tag: 'ativa',

  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Voluntária',
    local: 'Dois Pães e um Pingado',
    area: 'Alívio a pobreza', 
    initialDate: '10/2016',
    endDate: '07/2018',
    description: 'Ação social com distribuição de café da manhã e apoio para pessoas em situação de rua e vulnerabilidade social, com foco no centro da cidade do Recife, na Praça do Diário.',
    tag: 'inativa'
  },
];

export default FlatListComponent;