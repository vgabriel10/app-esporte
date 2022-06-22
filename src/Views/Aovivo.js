import React,{useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import WebView from "react-native-webview";


export default function(){

    // const [dados,setDados] = useState([])

    // useEffect(
    //     ()=>{
    //         fetch('https://cfbcursos.com.br/filmes.json')
    //         .then((resp)=> resp.json())
    //         .then((json)=>setDados(json.filmes))
    //         .catch(()=>(alert('Erro ao carregar a lista de filmes')))
            
    //     }
    // )
    return(
        <WebView
      source={{uri:'https://prismatic-mandazi-f37bdc.netlify.app/'}}
      />
    )
}