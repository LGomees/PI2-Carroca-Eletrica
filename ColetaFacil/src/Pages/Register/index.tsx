import React from 'react';
import {ButtonText, Container, Input, RegisterButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

const Register: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>CADASTRO</Title>
      <Input placeholder={'Número da Carroça'} />
      <Input placeholder={'Email'} />
      <Input placeholder={'Senha'} />
      <Input placeholder={'Confirmação de Senha'} />
      <RegisterButton onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText>CADASTRAR</ButtonText>
      </RegisterButton>
    </Container>
  );
};

export default Register;
