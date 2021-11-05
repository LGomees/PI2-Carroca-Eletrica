import React, {useContext} from 'react';
import {Text, TouchableOpacity, ScrollView, TextInput, StyleSheet} from 'react-native';

import AppContext from '../../Contexts/AppContext';
import MenuBar from '../../Components/MenuBar';

import {Container, ContentContainer, TableReports, SendEmail} from './styles';
import { Icon } from 'react-native-elements';
import { writeFile, readFile } from 'react-native-fs';
import XLSX from 'xlsx';
import { Button } from 'react-native-elements/dist/buttons/Button';

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

  const gerarExcel = () => {
    var ws = XLSX.utils.json_to_sheet(report);
  
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Relatórios");
  
    const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});
    var RNFS = require('react-native-fs');
    var file = RNFS.DocumentDirectoryPath + '/relatorios.xlsx';
    writeFile(file, wbout, 'ascii').then((r)=>{/* :) */}).catch((e)=>{/* :( */});
  }

  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        <Text style={{marginTop: '3%', marginBottom: '3%', fontWeight: 'bold'}}>Relatório de Coletas</Text>
        <ScrollView style={{width: '80%'}}>
          {report!=null ? ( report.map(function (report) {
              return ( 
                <TableReports>
                  <>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Data e Hora: </Text><Text> {report.date}</Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Latitude: </Text><Text>{report.location.latitude}</Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Longitude: </Text><Text>{report.location.longitude}</Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Peso: </Text><Text>{report.weightCollected}</Text>
                  </>
                </TableReports>); }) ) : (
                  <TableReports>
                    <>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>Não possui relatórios de coleta.</Text>
                    </>
                  </TableReports> 
                )
            }
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
