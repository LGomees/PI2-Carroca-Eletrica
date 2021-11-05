import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #3aafb9;
`;

export const ContentContainer = styled.View`
  flex: 9;
  /* width: 50%; */
  height: 96%;
  padding: 3%;
  margin-right: 5px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
`;

export const WeightDifferenceText = styled.Text`
  color: green;
  font-size: 24px;
  text-align: justify;
  font-weight: bold;
  align-self: center;
`;

export const CurrentWeightText = styled.Text`
  color: green;
  font-size: 24px;
  font-weight: bold;
  align-self: center;
`;
