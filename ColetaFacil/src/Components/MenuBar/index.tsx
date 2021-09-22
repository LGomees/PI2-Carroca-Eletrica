import React from 'react';

import MenuButton from '../MenuButton';
import {Container} from './styles';

import cartIcon from '../../assets/images/iconeCarroca.png';
import selectedCartIcon from '../../assets/images/iconeCarrocaSelecionada.png';
import collectIcon from '../../assets/images/iconeColeta.png';
import selectedCollectIcon from '../../assets/images/iconeColetaSelecionado.png';
import mapIcon from '../../assets/images/iconeMapa.png';
import selectedMapIcon from '../../assets/images/iconeMapaSelecionado.png';
import reportIcon from '../../assets/images/iconeRelatorio.png';
import selectedReportIcon from '../../assets/images/iconeRelatorioSelecionado.png';

const MenuBar: React.FC = ({navigation}) => {
  return (
    <Container>
      <MenuButton
        onPress={() => navigation.navigate('Dashboard')}
        title={'Carroça'}
        src={cartIcon}
      />
      <MenuButton
        onPress={() => navigation.navigate('Map')}
        title={'Mapa'}
        src={mapIcon}
      />
      <MenuButton
        onPress={() => navigation.navigate('Report')}
        title={'Relatório'}
        src={reportIcon}
      />
      <MenuButton
        onPress={() => navigation.navigate('NewCollect')}
        title={'Nova Coleta'}
        src={collectIcon}
      />
    </Container>
  );
};

export default MenuBar;
