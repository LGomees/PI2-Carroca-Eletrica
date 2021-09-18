import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Vehicle from './Vehicle/';
import Map from './Map';
import Report from './Report';
import NewCollect from './NewCollect';
import {DrawerContainer} from './styles';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Dashboard: React.FC = () => {
  return (
    <DrawerContainer>
      <Drawer.Navigator
        initialRouteName="Vehicle"
        useLegacyImplementation
        screenOptions={{headerShown: false, drawerType: 'permanent'}}>
        <Drawer.Screen name="Vehicle" component={Vehicle} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Relatórios" component={Report} />
        <Drawer.Screen name="Nova Coleta" component={NewCollect} />
      </Drawer.Navigator>
    </DrawerContainer>
  );
};

export default Dashboard;
