import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import MyMap from './Pages/MyMap';
import Report from './Pages/Report';
import NewCollect from './Pages/NewCollect';

const src: React.FC = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  const navTheme = DefaultTheme;

  navTheme.colors.background = '#3aafb9';

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="MyMap" component={MyMap} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="NewCollect" component={NewCollect} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default src;
