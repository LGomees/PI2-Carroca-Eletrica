import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../Pages/Register';
import Dashboard from '../Pages/Dashboard';
import MyMap from '../Pages/MyMap';
import Report from '../Pages/Report';
import NewCollect from '../Pages/NewCollect';

const AppNavigation = createNativeStackNavigator();

const AppNavigationRoutes: React.FC = () => (
  <AppNavigation.Navigator
    initialRouteName="RegisterScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <AppNavigation.Screen name="RegisterScreen" component={RegisterScreen} />
    <AppNavigation.Screen name="Dashboard" component={Dashboard} />
    <AppNavigation.Screen name="MyMap" component={MyMap} />
    <AppNavigation.Screen name="Report" component={Report} />
    <AppNavigation.Screen name="NewCollect" component={NewCollect} />
  </AppNavigation.Navigator>
);

export default AppNavigationRoutes;
