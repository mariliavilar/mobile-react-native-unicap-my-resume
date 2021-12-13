import * as React from 'react';
import { Avatar } from 'react-native-paper';


const AvatarComponent = () => (
   <Avatar.Image size={142} source={sourceUri} />
);
export default AvatarComponent


//dados estaticos
const sourceUri = { uri:'https://media-exp1.licdn.com/dms/image/C4D03AQEnzaiwU2ccaQ/profile-displayphoto-shrink_800_800/0/1596582252874?e=1645056000&v=beta&t=puJchUjpyqEm7HmKYxljabIdZZTYrxq8A08v5NJ8Z9Y' }