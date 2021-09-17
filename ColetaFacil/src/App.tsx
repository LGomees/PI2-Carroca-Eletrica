import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native';


import RegisterScreen from './Pages/Register'

const src: React.FC = () => {  
  
  useEffect(() => {
  }, []);



  return (
    <SafeAreaView horizontal style={{flex: 1, backgroundColor: '#3aafb9' }}>
        <RegisterScreen/>
    </SafeAreaView>
  );
}

export default src;