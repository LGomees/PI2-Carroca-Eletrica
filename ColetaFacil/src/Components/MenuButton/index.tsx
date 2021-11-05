import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, ButtonIcon, ButtonText} from './styles';

interface MenuButtonProps extends TouchableOpacityProps {
  src: string;
  title: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  onPress,
  src,
  title,
  ...rest
}) => {
  return (
    <Container onPress={onPress}>
      <ButtonIcon source={src} />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default MenuButton;
