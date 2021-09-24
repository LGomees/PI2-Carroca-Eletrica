import React from 'react';
import {Text} from 'react-native';
import MapView from 'react-native-maps';

import MenuBar from '../../Components/MenuBar';
import {Container, ContentContainer} from './styles';
// AIzaSyDRUZ_X0Tuvhr9QaGabZBAwfRa3lJXhTcI
const Report: React.FC = () => {
  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        <MapView
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </ContentContainer>
    </Container>
  );
};

export default Report;
