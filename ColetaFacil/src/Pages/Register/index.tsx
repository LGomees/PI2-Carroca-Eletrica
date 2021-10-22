import React, {useEffect, useState} from 'react';
import {ButtonText, Container, Input, RegisterButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const Register: React.FC = () => {
  const navigation = useNavigation();

  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [userCreated, setUserCreated] = useState(false);

  const [user, setUser] = useState(null);

  const registerUser = async () => {
    if (email != null || password != null) {
      console.log('entraou', email);
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Usuário criado com sucesso', user);
          setUserCreated(true);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email já cadastrado');
            console.log('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Email inválido');
            console.log('That email address is invalid!');
          }
        });
    } else {
      console.log('Email ou senha incorretos');
      Alert.alert('Email ou senha incorretos');
    }
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
      />
      <Input
        placeholder={'Email'}
        placeholderTextColor={'black'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        returnKeyLabel={'next'}
        onChangeText={text => {
          onChangeEmail(text);
          console.log(email);
        }}
      />
      <Input
        placeholder={'Senha'}
        placeholderTextColor={'black'}
        autoCapitalize={'none'}
        returnKeyLabel={'next'}
        secureTextEntry
        autoCorrect={false}
        onChangeText={text => {
          onChangePassword(text);
          console.log(password);
        }}
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

      {userCreated && Alert.alert(`Usuário criado com sucesso!`)}
    </Container>
  );
};

export default Register;
