import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, ButtonText} from './styles';

interface MenuButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<MenuButtonProps> = ({onPress, title, ...rest}) => {
  return (
    <Container onPress={onPress} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
