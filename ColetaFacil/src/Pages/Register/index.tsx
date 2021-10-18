import React, {useEffect, useState} from 'react';
import {ButtonText, Container, Input, RegisterButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';

const Register: React.FC = () => {
  const navigation = useNavigation();

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const [user, setUser] = useState(null);

  const registerUser = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  return (
    <Container>
      <Title>CADASTRO</Title>
      <Input
        placeholder={'Número da Carroça'}
        placeholderTextColor={'black'}
        keyboardType={'numeric'}
        returnKeyLabel={'next'}
        autoCorrect={false}
        onChangeText={onChangeEmail}
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
        onChangeText={onChangePassword}
      />
      <Input
        placeholder={'Confirmação de Senha'}
        placeholderTextColor={'black'}
        autoCapitalize={'none'}
        returnKeyLabel={'done'}
        secureTextEntry
        autoCorrect={false}
      />
      <RegisterButton onPress={registerUser}>
        <ButtonText>CADASTRAR</ButtonText>
      </RegisterButton>
      <RegisterButton onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText>CADASTRAR</ButtonText>
      </RegisterButton>
    </Container>
  );
};

export default Register;
