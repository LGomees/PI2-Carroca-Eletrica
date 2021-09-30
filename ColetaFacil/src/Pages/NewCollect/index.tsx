import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../../Contexts/AppContext';

import MenuBar from '../../Components/MenuBar';
import Button from '../../Components/Button';

import {
  Container,
  ContentContainer,
  CurrentWeightText,
  WeightDifferenceText,
} from './styles';

const NewCollect: React.FC = () => {
  const {currentWeight, report, setCurrentWeight, setReport} =
    useContext(AppContext);

  const navigation = useNavigation();
  const [stage, setStage] = useState('normal');
  const [newWeight, setNewWeight] = useState(currentWeight + 50);

  const handleNewCollect = () => {
    setCurrentWeight(newWeight);
    setStage('normal');
    navigation.navigate('Dashboard');
  };

  return (
    <Container>
      <MenuBar />
      <ContentContainer>
        {stage === 'normal' ? (
          <>
            <Button
              onPress={() => setStage('startNewCollect')}
              title={'INICIAR\nNOVA COLETA'}
            />
            {/* <CurrentWeightText>
              Atualmente, sua carroça carrega
            </CurrentWeightText>
            <CurrentWeightText>{currentWeight} quilos!</CurrentWeightText> */}
          </>
        ) : (
          <></>
        )}
        {stage === 'startNewCollect' ? (
          <>
            <WeightDifferenceText>NOVA COLETA:{'\n'}</WeightDifferenceText>
            <WeightDifferenceText>
              Pesagem atual: {newWeight} Kg
            </WeightDifferenceText>
            <WeightDifferenceText>
              Peso anterior à coleta: {currentWeight} Kg{'\n'}
            </WeightDifferenceText>
            <WeightDifferenceText>
              Peso coletado: {newWeight - currentWeight} Kg
            </WeightDifferenceText>

            <Button
              onPress={() => handleNewCollect()}
              title={'CONCLUIR\nNOVA COLETA'}
            />
            <Button
              onPress={() => setStage('normal')}
              title={'CANCELAR'}
              style={{backgroundColor: 'red', width: '25%'}}
            />
          </>
        ) : (
          <></>
        )}
      </ContentContainer>
    </Container>
  );
};

export default NewCollect;
