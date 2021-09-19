import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #fefefe;
  margin: 1% 1% 1% 0%;
  border-radius: 10px;
`;

export const SpeedometerContainer = styled.View`
  width: 70%;
  justify-content: center;
`;

export const BlinkersContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfosContainer = styled.View`
  flex-direction: column;
  width: 30%;
  padding: 2px;
`;

export const BatteryContainer = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const WeightContainer = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
