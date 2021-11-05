import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../Contexts/AuthProvider';
import auth from '@react-native-firebase/auth';

import RegisterScreen from '../Pages/Register';
import Dashboard from '../Pages/Dashboard';
import MyMap from '../Pages/MyMap';
import Report from '../Pages/Report';
import NewCollect from '../Pages/NewCollect';

const AppNavigation = createNativeStackNavigator();

const AppNavigationRoutes: React.FC = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <AppNavigation.Navigator
      initialRouteName={user ? 'Dashboard' : 'RegisterScreen'}
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
};

export default AppNavigationRoutes;
