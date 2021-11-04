import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import AppContext from '../../Contexts/AppContext';
import MenuBar from '../../Components/MenuBar';

import {Container, ContentContainer} from './styles';

const Report: React.FC = () => {
  const {report, setReport} = useContext(AppContext);

  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        {report.map(function (report) {
          return (
            <>
              <Text>{report.date}</Text>
              <Text>{report.location.latitude}</Text>
              <Text>{report.location.longitude}</Text>
              <Text>{report.weightCollected}</Text>
            </>
          );
        })}
        <TouchableOpacity onPress={() => console.log(report)}>
          <Text>Console</Text>
        </TouchableOpacity>
      </ContentContainer>
    </Container>
  );
};

export default Report;
