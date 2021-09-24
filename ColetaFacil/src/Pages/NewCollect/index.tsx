import React, {useContext, useState} from 'react';
import {Text} from 'react-native';

import AppContext from '../../Contexts/AppContext';

import MenuBar from '../../Components/MenuBar';
import Button from '../../Components/Button';

import {Container, ContentContainer, WeightDifferenceText} from './styles';

const NewCollect: React.FC = () => {
  const {currentWeight, report, setCurrentWeight, setReport} =
    useContext(AppContext);

  const [stage, setStage] = useState('normal');
  const [newWeight, setNewWeight] = useState(currentWeight + 50);

  const handleNewCollect = () => {
    setCurrentWeight(newWeight);
    setStage('normal');
  };

  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        {stage === 'normal' ? (
          <Button
            onPress={() => setStage('startNewCollect')}
            title={'INICIAR\nNOVA COLETA'}
          />
        ) : (
          <></>
        )}
        {stage === 'startNewCollect' ? (
          <>
            <Button
              onPress={() => handleNewCollect()}
              title={'CONCLUIR\nNOVA COLETA'}
            />
            <Button
              onPress={() => setStage('normal')}
              title={'CANCELAR'}
              style={{backgroundColor: 'red', width: '25%'}}
            />
            <WeightDifferenceText>Você está coletando:</WeightDifferenceText>
            <WeightDifferenceText>
              {newWeight - currentWeight} Kg
            </WeightDifferenceText>
          </>
        ) : (
          <></>
        )}
      </ContentContainer>
    </Container>
  );
};

export default NewCollect;
