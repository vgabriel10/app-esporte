import React from "react";
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import WebView from "react-native-webview";

import BarraSuperior from '../Componentes/BarraSuperior';
import BarraInferior from '../Componentes/BarraInferior'; 
import Conteudo from '../Componentes/Conteudo';


export default function App() {
  return (

    <WebView
      source={{uri:'https://vgabriel10.github.io/site-app-esportes/'}}
      />


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