import React, {useContext} from 'react';
import {Text, TouchableOpacity, ScrollView} from 'react-native';

import AppContext from '../../Contexts/AppContext';
import MenuBar from '../../Components/MenuBar';

import {Container, ContentContainer, TableReports} from './styles';

const Report: React.FC = () => {
  const {report, setReport} = useContext(AppContext);

  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        <Text>Relatório de Coletas</Text>
        <ScrollView style={{width: '80%'}}>
          {report.map(function (report) {
            return (
              <TableReports>
                <>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Data e Hora: </Text><Text> {report.date}</Text>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Latitude: </Text><Text>{report.location.latitude}</Text>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Longitude: </Text><Text>{report.location.longitude}</Text>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Peso: </Text><Text>{report.weightCollected}</Text>
                </>
              </TableReports>
            );
          })}
        </ScrollView>
        <TouchableOpacity onPress={() => console.log(report)}>
          <Text>Console</Text>
        </TouchableOpacity>
      </ContentContainer>
    </Container>
  );
};

export default Report;
