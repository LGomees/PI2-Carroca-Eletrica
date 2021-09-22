import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routes from './routes';

const src: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const navTheme = DefaultTheme;

  navTheme.colors.background = '#3aafb9';

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <NavigationContainer theme={navTheme}>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default src;
