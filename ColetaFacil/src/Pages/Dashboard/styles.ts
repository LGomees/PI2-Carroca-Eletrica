import styled from 'styled-components/native';
import Speedometer from 'react-native-cool-speedometer';

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
  padding: 1%;
  margin-right: 5px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
`;

export const LeftContainer = styled.View`
  width: 60%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const RightContainer = styled.View`
  width: 40%;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const BlinkersContainer = styled.View`
  flex: 2;
  width: 90%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 12px;
  margin-bottom: 20px;
  margin-top: -15px;
`;

export const SpeedometerContainer = styled.View`
  flex: 7;
  width: 85%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  /* background-color: brown; */
`;

export const MySpeedometer = styled(Speedometer)`
  width: 92%;
  align-self: center;
`;

export const BatteryContainer = styled.View`
  height: 48%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BateryImage = styled.Image`
  height: 95px;
  width: 50px;
  margin-left: 15px;
`;

export const BatteryTextContainer = styled.View`
  width: 65%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const BateryPercentage = styled.Text`
  color: orange;
  font-size: 38px;
  font-weight: bold;
  align-self: center;
`;

export const BateryText = styled.Text`
  color: #093a3e;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

export const BateryTimeLeft = styled.Text`
  color: orange;
  font-size: 16px;
  font-weight: bold;
`;

export const MyBatery = styled(Speedometer)`
  width: 98%;
  margin-top: 10px;
  margin-left: 110px;
  align-self: center;
  margin-bottom: 10px;
`;

export const WeightContainer = styled.View`
  width: 90%;
  height: 48%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1%;
  padding-left: 10%;
  background-color: #fefefe;
`;

export const WeightText = styled.Text`
  color: #3a4559;
  width: 70%;
  font-size: 48px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const WeightImage = styled.Image`
  height: 65px;
  width: 115px;
`;
