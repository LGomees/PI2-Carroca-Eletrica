import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import MenuBar from '../../Components/MenuBar';
import {Container, ContentContainer} from './styles';
import {colorsDark} from 'react-native-elements/dist/config';
// AIzaSyDRUZ_X0Tuvhr9QaGabZBAwfRa3lJXhTcI

const Report: React.FC = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (function () {
      Geolocation.getCurrentPosition(
        location => {
          console.log(location);
          setOrigin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          });
        },
        error => console.log(error),
        {enableHighAccuracy: true},
      );
      console.log('Localização: ', origin);
    })();
  }, []);
  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        <MapView
          style={{width: '100%', height: '100%'}}
          initialRegion={origin}
        />
      </ContentContainer>
    </Container>
  );
};

export default Report;
