import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
// View representa qualquer container como a div que teríamos no html normal
import Routes from './src/routes';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
//JSX: código XML só que em linguagem JS
export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular, Roboto_500Medium
  });
  if (!fontsLoaded) {
    return <AppLoading />

  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}


  //Estilização feita com Javascript não com arquivos .css 
  //Automaticamente todo os elementos possuem display flex, sendo assim podendo utilizar propriedades do mesmo
