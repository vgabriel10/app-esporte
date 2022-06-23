import React, {useState} from "react";
import {StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} 
      options={{
        headerShown: false
    }}/>
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Dicas" component={Dicas} />
    </Stack.Navigator>
  );
}


function Menu({ navigation }) {
    return (
        <View style={styles.container}>
    
        <Animatable.View style={styles.logo}
        animation='bounceInDown'
        duration={1600}>
            <Text style={styles.estiloLetras}>Esportes
            <Image
            source={require('../../assets/img/icon-estadio.png')}
            />
            </Text>
            
        </Animatable.View>
        
        <Animatable.View style={{marginTop:30}}
        animation='bounceInLeft'
        duration={2000}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dicas')}>
                <Text style={styles.letrasBotoes}>Dicas</Text>
            </TouchableOpacity>
        </Animatable.View>

        <Animatable.View style={{marginTop:20}}
        animation='bounceInLeft'
        duration={2100}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Sobre')}>
                <Text style={styles.letrasBotoes}>Sobre o Projeto</Text>
            </TouchableOpacity>
        </Animatable.View>

    </View>
    );
  }


  function Sobre({ navigation }) {
    return (
        <View>
            <Text style={styles.letras}>
              Projeto feito em React Native (Expo) usando a linguagem de programação JavaScript.{'\n'}{'\n'}
              Dependências Usadas:{'\n'}{'\n'}
            "@react-native-community/masked-view": "^0.1.11",{'\n'}
            "@react-navigation/bottom-tabs": "^6.3.1",{'\n'}
            "@react-navigation/native": "^6.0.10",{'\n'}
            "@react-navigation/stack": "^6.2.1",{'\n'}
            "expo": "^45.0.0",{'\n'}
            "expo-status-bar": "~1.3.0",{'\n'}
            "react": "17.0.2",{'\n'}
            "react-dom": "17.0.2",{'\n'}
            "react-native": "0.68.2",{'\n'}
            "react-native-animatable": "^1.3.3",{'\n'}
            "react-native-gesture-handler": "~2.2.1",{'\n'}
            "react-native-reanimated": "~2.8.0",{'\n'}
            "react-native-safe-area-context": "4.2.4",{'\n'}
            "react-native-screens": "~3.11.1",{'\n'}
            "react-native-web": "0.17.7",{'\n'}
            "react-native-webview": "^11.18.1"{'\n'}
            </Text>
            
        </View>
    );
  }


  function Dicas({ navigation }) {
    return (
      <View>
        <View>
          <Ionicons name='home-outline' color={'#222'} size={50} />
          <Text style={styles.letras}>Mostra as principais noticias dos esportes.</Text>
        </View>
        <View>
          <Ionicons name='play' color={'#222'} size={50} />
          <Text style={styles.letras}>Mostra uma tabela com todos os jogos de futebol que estão acontecendo no dia atual.</Text>
        </View>
        <View>
        <Feather name='grid' color={'#222'} size={50} />
          <Text style={styles.letras}>Separa os esportes em categorias, onde vai mostrar a classificação (Nacional) de cada um.</Text>
        </View>
      </View>
      
    );
  }


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyStack/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imagemLogo:{
        width:'100%',
        height:'25%',
        

    },
    estiloLetras:{
        fontSize:60,
        fontWeight:'bold',
        flexDirection:"row",
        
        
    },
    logo:{
        justifyContent:'flex-start',
        width:'100%',
        height:'25%',
        
        
    },
    botao:{
        width:'100%',
        height:30,
        backgroundColor:'#222',
        alignItems:"center",
        borderColor:'#696969',
        borderRadius:10,

    },
    letrasBotoes:{
        fontSize:16,
        color:'#fff'
    },
    letras:{
        fontSize:16,
        marginLeft:5
    },
    icones:{
      width:50,
      height:50,
      resizeMode:"contain"
    }
    
});