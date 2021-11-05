import React from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /*background-color: #3aafb9;*/
`;

export const Title = styled.Text`
  color: #fefefe;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  /*font-family: ;*/
`;

export const InputContainer = styled.View``;

export const Input = styled.TextInput`
  background-color: #fefefe;
  width: 80%;
  padding-left: 10px;
  border-radius: 10px;
  color: black;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #42cad6;
  padding: 5px 10px;
  border-radius: 10px;
  /* width: 20%;*/
  /*height: 10%;*/
`;

export const ButtonText = styled.Text`
  color: #fefefe;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;
