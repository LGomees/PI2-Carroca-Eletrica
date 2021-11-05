import React, {useContext, useEffect, useState} from 'react';
import {Image} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {Icon} from 'react-native-elements';
import Toast from 'react-native-root-toast';

import MenuBar from '../../Components/MenuBar';
import AppContext from '../../Contexts/AppContext';

import weightImage from '../../assets/images/BalancaPeso.png';
import completeBatery from '../../assets/images/BateriaCheia.png';
import highBatery from '../../assets/images/BateriaAlta.png';
import mediumBatery from '../../assets/images/BateriaMedia.png';
import lowBatery from '../../assets/images/BateriaBaixa.png';
import reallyLowBatery from '../../assets/images/BateriaMuitoBaixa.png';

import {
  BatteryContainer,
  BlinkersContainer,
  Container,
  LeftContainer,
  RightContainer,
  SpeedometerContainer,
  ContentContainer,
  WeightContainer,
  MySpeedometer,
  WeightText,
  BateryText,
  WeightImage,
  BatteryTextContainer,
  BateryPercentage,
  BateryTimeLeft,
  BateryImage,
} from './styles';

const Dashboard: React.FC = () => {
  const {currentWeight} = useContext(AppContext);
  const isScreenOnFocus = useIsFocused();

  const [color, setColor] = useState(0);
  const [color2, setColor2] = useState(1);

  const [Up, setUp] = useState(true);
  const [speed, setSpeed] = useState(0);

  const [bateryLevel, setBateryLevel] = useState(100);

  const blinkersColor = ['#d2d3d5', '#3aafb9'];
  const blinkersColorBreak = ['#d2d3d5', '#FF0000'];

  useEffect(() => {
    if (bateryLevel <= 30 && isScreenOnFocus) {
      Toast.show('Bateria do motor baixa!', {
        backgroundColor: '#fe5252',
        duration: 400,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 0.98,
      });
    }
  }, [bateryLevel]);

  useEffect(() => {
    let intervalId;

    intervalId = setTimeout(() => {
      setColor(v => (v === 1 ? 0 : v + 1));
      setColor2(s => (s === 0 ? s + 1 : 0));
      if (Up) {
        setSpeed(speed + 5);
      } else {
        setSpeed(speed - 5);
      }
    }, 500);

    if (speed >= 35) {
      setUp(false);
      if (isScreenOnFocus)
        Toast.show('Cuidado com a velocidade!', {
          backgroundColor: '#fe5252',
          duration: 400,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          opacity: 0.98,
        });
    } else if (speed <= 5) {
      setUp(true);
    }

    setBateryLevel(speed * 2 + 10);

    return () => clearTimeout(intervalId);
  }, [speed]);

  const checkBateryLevel = () => {
    if (bateryLevel >= 85) {
      return completeBatery;
    } else if (bateryLevel <= 85 && bateryLevel > 50) {
      return highBatery;
    } else if (bateryLevel == 50) {
      return mediumBatery;
    } else if (bateryLevel < 50 && bateryLevel > 25) {
      return lowBatery;
    } else if (bateryLevel <= 25 && bateryLevel >= 0) {
      return reallyLowBatery;
    }
  };

  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        <LeftContainer>
          <BlinkersContainer>
            <Icon
              name="arrow-left"
              type="font-awesome"
              color={blinkersColor[color]}
              size={40}
              onPress={() => console.log('asd')}
            />
            <Icon
              name="circle"
              type="font-awesome"
              color={blinkersColorBreak[color]}
              size={40}
              onPress={() => console.log('asd')}
            />
            <Icon
              name="arrow-right"
              type="font-awesome"
              color={blinkersColor[color2]}
              size={40}
              onPress={() => console.log('asd')}
            />
          </BlinkersContainer>
          <SpeedometerContainer>
            <MySpeedometer
              value={speed}
              max={45}
              step={2}
              size={270}
              // accentColor="#fe5252"
              backgroundColor="#3A4559"
              primaryArcWidth={15}
              primaryArcColor="#3A4559"
              secondaryArcWidth={100}
              secondaryArcColor="#000000"
              dangerZone
              dangerZoneAngle={60}
              fontFamily="squada-one"
              indicatorSuffix=" Km/h"
              indicatorStyle={{
                bottom: 20,
                fontSize: 40,
                marginLeft: 30,
                color: '#fefefe',
                fontWeight: 'bold',
              }}
              needle={{
                color: '#25282D',
                baseOffset: -35,
                circleRadius: 40,
                circleColor: '#25282D',
              }}
            />
          </SpeedometerContainer>
        </LeftContainer>
        <RightContainer>
          <BatteryContainer>
            <BateryImage source={checkBateryLevel()} />
            <BatteryTextContainer>
              <BateryPercentage>{bateryLevel}%</BateryPercentage>
              <BateryText>Tempo Restante:</BateryText>
              <BateryTimeLeft>
                {Math.floor((bateryLevel / 100)*8)}h{speed + 15}m
              </BateryTimeLeft>
            </BatteryTextContainer>
          </BatteryContainer>
          <WeightContainer>
            <WeightText>{currentWeight}</WeightText>
            <WeightImage source={weightImage} />
          </WeightContainer>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
