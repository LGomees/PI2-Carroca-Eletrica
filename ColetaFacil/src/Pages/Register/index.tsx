import React from 'react';
import { ButtonText, Container, Input, RegisterButton, Title } from './styles';

const Register: React.FC = ({}) => {
  return (
    <Container >
        <Title>CADASTRO</Title>
        <Input placeholder={'Número da Carroça'} />
        <Input placeholder={'Email'}/>
        <Input placeholder={'Senha'}/>
        <Input placeholder={'Confirmação de Senha'}/>
        <RegisterButton>
            <ButtonText>CADASTRAR</ButtonText>
        </RegisterButton>

    </Container>
    );
}

export default Register;