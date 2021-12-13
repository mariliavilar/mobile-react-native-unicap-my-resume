import * as React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonLinkingComponent = ({title, url}) => (
  <Button icon="linkedin" mode="outline" onPress={() => Linking.openURL(url)}>
    {title}
  </Button>
);

export default ButtonLinkingComponent;