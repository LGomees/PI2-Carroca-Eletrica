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
    <Drawer.Navigator
      initialRouteName="Vehicle"
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#3aafb9',
          width: 150,
          height: '100%',
        },
        drawerContentStyle: {},
        drawerLabelStyle: {
          color: '#fefefe',
        },
        drawerActiveBackgroundColor: '#fefefe',
        drawerInactiveBackgroundColor: '#3aafb9',
        drawerItemStyle: {
          width: '100%',
          height: '22%',
        },
        drawerContentContainerStyle: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        },
        headerShown: false,
        drawerType: 'permanent',
      }}>
      <Drawer.Screen
        name="Vehicle"
        component={Vehicle}
        options={{drawerLabel: 'Carroça'}}
      />
      <Drawer.Screen
        name="Map"
        component={Map}
        options={{drawerLabel: 'Mapa'}}
      />
      <Drawer.Screen
        name="Relatórios"
        component={Report}
        options={{drawerLabel: 'Relatórios'}}
      />
      <Drawer.Screen
        name="Nova Coleta"
        component={NewCollect}
        options={{drawerLabel: 'Nova Coleta'}}
      />
    </Drawer.Navigator>
  );
};

export default Dashboard;
