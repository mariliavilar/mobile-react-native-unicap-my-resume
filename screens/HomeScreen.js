import React from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import { Text, Title, Headline, Paragraph, Subheading} from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";


import AvatarComponent from '../components/AvatarComponent';
import ButtonLinkingComponent from '../components/ButtonLinkingComponent';


const name = 'Marília Vilar'
const photoUrl = 'https://media-exp1.licdn.com/dms/image/C4D03AQEnzaiwU2ccaQ/profile-displayphoto-shrink_800_800/0/1596582252874?e=1645056000&v=beta&t=puJchUjpyqEm7HmKYxljabIdZZTYrxq8A08v5NJ8Z9Y'
const description = 'Desenvolvedora Android na Roadmapss | Engenheira Mecânica'
const contactLinkedin = 'https://www.linkedin.com/in/mariliavilar/'
const about = 'Mulher, Pernambucana e Engenheira Mecânica(UFPE), apaixonada pela tecnologia e sua contribuição na sociedade, decidi mudar de área e estou cursando Superior em Sistemas para Internet (Unicap -4o período) em busca de aprendizados e desafios na área de desenvolvimento de software. Atuo como Desenvolvedora Android Júnior na empresa Roadmapps e sou apaixonada pelo Frevo e pela cultura popular.' 
//backend: nome/descricao/contato/sobre
 

export function HomeScreen({navigation}) {
  return(
    <View  style={styles.container}>
        <AvatarComponent/>
        <Headline>{name}</Headline>
        <Title>{description}</Title>
        <ButtonLinkingComponent title='linkedin' icon='linkedin' url={contactLinkedin}>
          {name}
        </ButtonLinkingComponent>
        <Subheading>Um pouco sobre mim</Subheading>
        <Paragraph>{about}</Paragraph>
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