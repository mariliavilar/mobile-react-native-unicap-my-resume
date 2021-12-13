import * as React from 'react';
import { List } from 'react-native-paper';

const ListAccordionComponent = () => {

  return (
    <List.Section title="Competências">
      <List.Accordion
      title="Idiomas"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Português" description="(Nativa)"/>
        <List.Item title="Espanhol" description="Avançado"/>
        <List.Item title="Inglês" description="Intermediário"/>
      </List.Accordion>

      <List.Accordion
        title="Linguagens de Programação"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Java" />
        <List.Item title="Kotlin" />
        <List.Item title="Java Script" />
      </List.Accordion>

      <List.Accordion
        title="Ferramentas e Tecnologias"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Adobe XD" />
        <List.Item title="HTML" />
        <List.Item title="CSS" />
        <List.Item title="GIT" />
        <List.Item title="Pacote Office" />
      </List.Accordion>

    </List.Section>
  );
};

export default ListAccordionComponent;