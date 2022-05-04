import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import {WebView} from  'react-native-webview'

import BarraSuperior from './src/Componentes/BarraSuperior';
import BarraInferior from './src/Componentes/BarraInferior'; 
import Home from './screens/Home';
import Index from '.screens/Index';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="teste" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barraPesquisa:{
    flex:1
  },

  conteudo:{
    flex:8
  },
  rodape:{
    flex:1,
    backgroundColor:'grey',
    width:'100%'
  }

});
