import React from 'react';

import {useNavigation} from '@react-navigation/native';

import MenuButton from '../MenuButton';
import cartIcon from '../../assets/images/iconeCarroca.png';
import selectedCartIcon from '../../assets/images/iconeCarrocaSelecionada.png';
import collectIcon from '../../assets/images/iconeColeta.png';
import selectedCollectIcon from '../../assets/images/iconeColetaSelecionado.png';
import mapIcon from '../../assets/images/iconeMapa.png';
import selectedMapIcon from '../../assets/images/iconeMapaSelecionado.png';
import reportIcon from '../../assets/images/iconeRelatorio.png';
import selectedReportIcon from '../../assets/images/iconeRelatorioSelecionado.png';

import {Container} from './styles';

const MenuBar: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <MenuButton
        onPress={() => navigation.navigate('Dashboard')}
        title={'Carroça'}
        src={cartIcon}
      />
      <MenuButton
        onPress={() => navigation.navigate('MyMap')}
        title={'Mapa'}
        src={mapIcon}
      />
      <MenuButton
        onPress={() => navigation.navigate('NewCollect')}
        title={'Nova Coleta'}
        src={collectIcon}
      />
      <MenuButton
        onPress={() => navigation.navigate('Report')}
        title={'Relatório'}
        src={reportIcon}
      />
    </Container>
  );
};

export default MenuBar;
