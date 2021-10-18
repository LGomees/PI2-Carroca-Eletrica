import React, {useState} from 'react';
import {ButtonText, Container, Input, RegisterButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

const Register: React.FC = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);

  const registerUser = async dados => {};

  return (
    <Container>
      <Title>CADASTRO</Title>
      <Input
        placeholder={'Número da Carroça'}
        placeholderTextColor={'black'}
        keyboardType={'numeric'}
        returnKeyLabel={'next'}
        autoCorrect={false}
      />
      <Input
        placeholder={'Email'}
        placeholderTextColor={'black'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        returnKeyLabel={'next'}
      />
      <Input
        placeholder={'Senha'}
        placeholderTextColor={'black'}
        autoCapitalize={'none'}
        returnKeyLabel={'next'}
        secureTextEntry
        autoCorrect={false}
      />
      <Input
        placeholder={'Confirmação de Senha'}
        placeholderTextColor={'black'}
        autoCapitalize={'none'}
        returnKeyLabel={'done'}
        secureTextEntry
        autoCorrect={false}
      />
      <RegisterButton onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText>CADASTRAR</ButtonText>
      </RegisterButton>
    </Container>
  );
};

export default Register;
