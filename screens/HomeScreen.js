import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { Headline, Paragraph, Subheading} from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

import AvatarComponent from '../components/AvatarComponent';
import ButtonLinkingComponent from '../components/ButtonLinkingComponent';


export function HomeScreen() {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AvatarComponent style={styles.section}/>
        <Headline style={styles.section}>{name}</Headline>
        <Subheading>{description}</Subheading>
        <ButtonLinkingComponent
          title='linkedin'
          icon='linkedin'
          url={contactLinkedin}
        >{name}
        </ButtonLinkingComponent>
        <Subheading style={styles.section}>Um pouco sobre mim</Subheading>
        <Paragraph style={styles.section}>{about}</Paragraph>
    </ScrollView>
    </SafeAreaView>
 
      )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     padding: 36,
     backgroundColor: 'gainsboro',
   },
   section:{
     marginTop: 20
   },
});


//dados estaticos
const name = 'Marília Vilar'
const description = 'Desenvolvedora Android na Roadmapss | Engenheira Mecânica'
const contactLinkedin = 'https://www.linkedin.com/in/mariliavilar/'
const about = 'Mulher, Pernambucana e Engenheira Mecânica(UFPE), apaixonada pela tecnologia e sua contribuição na sociedade, decidi mudar de área e estou cursando Superior em Sistemas para Internet (Unicap -4o período) em busca de aprendizados e desafios na área de desenvolvimento de software. Atuo como Desenvolvedora Android Júnior na empresa Roadmapps e sou apaixonada pelo Frevo e pela cultura popular.' 