import React, {useContext, useEffect, useState} from 'react';
import {ButtonText, Container, Input, RegisterButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {AuthContext} from '../../Contexts/AuthProvider';

const Register: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

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
        onChangeText={userEmail => setEmail(userEmail)}
      />
      <Input
        placeholder={'Senha'}
        placeholderTextColor={'black'}
        autoCapitalize={'none'}
        returnKeyLabel={'next'}
        secureTextEntry
        autoCorrect={false}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <Input
        placeholder={'Confirmação de Senha'}
        placeholderTextColor={'black'}
        autoCapitalize={'none'}
        returnKeyLabel={'done'}
        secureTextEntry
        autoCorrect={false}
        onChangeText={confirmUserPassword => {
          setConfirmPassword(confirmUserPassword);
          navigation.navigate('Dashboard');
        }}
      />
      {/* <RegisterButton onPress={() => register(email, password)}>
        <ButtonText>CADASTRAR</ButtonText>
      </RegisterButton> */}
      <RegisterButton onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText>CADASTRAR</ButtonText>
      </RegisterButton>
    </Container>
  );
};

export default Register;
