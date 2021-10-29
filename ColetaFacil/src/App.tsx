import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import AppContext from './Contexts/AppContext';

import Routes from './routes';
import {AuthProvider} from './Contexts/AuthProvider';

const src: React.FC = () => {
  const [currentWeight, setCurrentWeight] = useState(0);
  const [report, setReport] = useState([]);

  useEffect(() => {}, []);

  const navTheme = DefaultTheme;

  navTheme.colors.background = '#3aafb9';

  return (
    <AuthProvider>
      <AppContext.Provider
        value={{currentWeight, report, setCurrentWeight, setReport}}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar hidden />
          <NavigationContainer theme={navTheme}>
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
      </AppContext.Provider>
    </AuthProvider>
  );
};

export default src;
