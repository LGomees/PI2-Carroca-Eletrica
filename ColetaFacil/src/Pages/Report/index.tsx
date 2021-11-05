import React, {useContext} from 'react';
import {Text, TouchableOpacity, ScrollView, TextInput, StyleSheet} from 'react-native';

import AppContext from '../../Contexts/AppContext';
import MenuBar from '../../Components/MenuBar';

import {Container, ContentContainer, TableReports, SendEmail} from './styles';
import { Icon } from 'react-native-elements';

const Report: React.FC = () => {
  const {report, setReport} = useContext(AppContext);
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      margin: 15,
      marginRight: 3,
      padding: 10,
      borderRadius: 5,
    },
    icon: {
      margin: 15,
      padding: 10,
      marginLeft: 0,
      marginTop: 12,
    }
  });

  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        <Text style={{marginTop: '3%', marginBottom: '3%', fontWeight: 'bold'}}>Relatório de Coletas</Text>
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
        <SendEmail>
          <TextInput
            placeholder={"Digite o email para exportar"}
            style={styles.input}/><Icon style={styles.icon} name='send'/>
        </SendEmail>
      </ContentContainer>
    </Container>
  );
};

export default Report;
