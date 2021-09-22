import React from 'react';
import {Text} from 'react-native';

import MenuBar from '../../Components/MenuBar';
import {Container, ContentContainer} from './styles';

const Report: React.FC = () => {
  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        <Text>Relatórios</Text>
      </ContentContainer>
    </Container>
  );
};

export default Report;
