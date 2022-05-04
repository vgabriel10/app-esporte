import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';


import BarraSuperior from './src/Componentes/BarraSuperior';
import BarraInferior from './src/Componentes/BarraInferior'; 
import Conteudo from './src/Componentes/Conteudo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <BarraSuperior/>
    <Conteudo/>
  

    <BarraInferior/>

    </SafeAreaView>
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
