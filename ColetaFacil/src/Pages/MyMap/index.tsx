import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'react-native-elements';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import {Alert, Modal, Text} from 'react-native';

import MenuBar from '../../Components/MenuBar';
import {
  Container,
  ContentContainer,
  MapContainer,
  SearchContainer,
  SearchTextInput,
} from './styles';
import {colorsDark} from 'react-native-elements/dist/config';
import {TextInput} from 'react-native-gesture-handler';
// AIzaSyDRUZ_X0Tuvhr9QaGabZBAwfRa3lJXhTcI

const Report: React.FC = () => {
  const mapEl = useRef(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [eta, setEta] = useState(null);

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
        <SearchContainer>
          <GooglePlacesAutocomplete
            placeholder="Onde vamos?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setDestination({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              });
            }}
            query={{
              key: 'AIzaSyDRUZ_X0Tuvhr9QaGabZBAwfRa3lJXhTcI',
              language: 'pt-br',
            }}
            textInputProps={{
              InputComp: SearchTextInput,
              placeholderTextColor: 'black',
              disableFullscreenUI: true,
            }}
            fetchDetails={true}
            enablePoweredByContainer={true}
            enableHighAccuracyLocation={true}
            isRowScrollable={true}
            minLength={3}
            nearbyPlacesAPI={'GooglePlacesSearch'}
          />
        </SearchContainer>
        <MapContainer>
          <MapView
            style={{width: '100%', height: '100%'}}
            initialRegion={origin}
            region={origin}
            showsUserLocation={true}
            ref={mapEl}>
            {destination && (
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey="AIzaSyDRUZ_X0Tuvhr9QaGabZBAwfRa3lJXhTcI"
                strokeWidth={3}
                onReady={result => {
                  setDistance(result.distance);
                  setEta(result.duration);
                  mapEl.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      top: 50,
                      bottom: 50,
                      left: 50,
                      right: 50,
                    },
                  });
                }}
              />
            )}
          </MapView>
        </MapContainer>
        {distance &&
          Alert.alert(
            'Dados da viagem',
            'Distancia até o destino: ' +
              distance.toPrecision(2).toString() +
              ' Km\nTempo para chegada: ' +
              eta.toPrecision(2).toString() +
              ' minutos',
          )}
      </ContentContainer>
    </Container>
  );
};

export default Report;
