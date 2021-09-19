import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {
  BatteryContainer,
  BlinkersContainer,
  Container,
  InfosContainer,
  SpeedometerContainer,
  WeightContainer,
} from './styles';
import Speedometer from 'react-native-speedometer-chart';
import RNSpeedometer from 'react-native-speedometer';
import ProgressCircle from 'react-native-progress/Circle';
import {Icon} from 'react-native-elements';

const blinkersColor = ['#d2d3d5', '#3aafb9'];
const speeds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const Vehicle: React.FC = () => {
  const [color, setColor] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(v => (v === 1 ? 0 : v + 1));
      setSpeed(s => (s === 49 ? 0 : s + 1));
    }, 1500);
  }, []);

  return (
    <Container>
      <SpeedometerContainer>
        <BlinkersContainer>
          <Icon
            name="arrow-left"
            type="font-awesome"
            color={blinkersColor[color]}
            size={40}
            onPress={() => console.log('hello')}
          />
          <Icon
            name="arrow-right"
            type="font-awesome"
            color={blinkersColor[color]}
            size={40}
            onPress={() => console.log('hello')}
          />
        </BlinkersContainer>
        <RNSpeedometer
          value={speeds[speed]}
          size={300}
          maxValue={50}
          labels={speedometerLabels}
        />
      </SpeedometerContainer>
      <InfosContainer>
        <BatteryContainer>
          <Text>Nível da Bateria</Text>
          <ProgressCircle
            progress={0.5}
            size={100}
            animated
            thickness={10}
            showsText
            color="#3aafb9"
          />
        </BatteryContainer>
        <WeightContainer>
          <Text>250</Text>
          <Icon
            name="weight-kilogram"
            type="material-community"
            size={70}
            color="#093a3e"
          />
        </WeightContainer>
      </InfosContainer>
    </Container>
  );
};

const speedometerLabels = [
  {
    name: 'Km/h',
    labelColor: '#3aafb9',
    activeBarColor: '#646362',
  },
];

export default Vehicle;
