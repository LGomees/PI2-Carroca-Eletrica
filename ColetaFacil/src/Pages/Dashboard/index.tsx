import React, {useContext, useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {Icon} from 'react-native-elements';
import Toast from 'react-native-root-toast';

import MenuBar from '../../Components/MenuBar';
import AppContext from '../../Contexts/AppContext';
import weightImage from '../../assets/images/BalancaPeso.png';

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
  MyBatery,
  BateryText,
  WeightImage,
} from './styles';

const Dashboard: React.FC = ({navigation}) => {
  const {currentWeight} = useContext(AppContext);
  const isScreenOnFocus = useIsFocused();

  const [color, setColor] = useState(0);
  const [color2, setColor2] = useState(1);

  const [Up, setUp] = useState(true);
  const [speed, setSpeed] = useState(0);

  const blinkersColor = ['#d2d3d5', '#3aafb9'];

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
          duration: 200,
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

    return () => clearTimeout(intervalId);
  }, [speed]);

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
              size={300}
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
            <BateryText>Nível da Bateria</BateryText>
            <MyBatery
              noNeedle
              max={100}
              value={100 - speed * 2}
              size={150}
              angle={360}
              noLineMarks
              noBackground
              noNumberMarks
              duration={500}
              lineCap="round"
              indicatorCentered
              primaryArcWidth={15}
              accentColor="orange"
              indicatorStyle={{
                color: 'orange',
                marginRight: 50,
              }}
              indicatorSuffix=" %"
            />
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
