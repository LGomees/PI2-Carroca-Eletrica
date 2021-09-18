import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Container} from './styles';
import Speedometer from 'react-native-speedometer-chart';
import RNSpeedometer from 'react-native-speedometer';

const Vehicle: React.FC = () => {
  return (
    <Container>
      <RNSpeedometer
        value={40}
        size={300}
        maxValue={50}
        labels={speedometerLabels}
      />
    </Container>
  );
};

const speedometerLabels = [
  {
    name: 'Too Slow',
    labelColor: '#c8b7b3',
    activeBarColor: '#646362',
  },
  {
    name: 'Very Slow',
    labelColor: '#ff5400',
    activeBarColor: '#ff5400',
  },
  {
    name: 'Slow',
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44',
  },
  {
    name: 'Normal',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  },
  {
    name: 'Fast',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e',
  },
  {
    name: 'Unbelievably Fast',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
  },
];

export default Vehicle;
