import React from "react";
import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';
import WebView from "react-native-webview";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Categorias({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{padding:35}}>
                
            <TouchableOpacity style={styles.espacamentoImg} onPress={() => navigation.navigate('Futebol')}>
                <Text style={styles.estiloLetras}>Futebol</Text>
                <ImageBackground source={require('../../assets/futebol.jpg')} style={styles.estiloImg}>

            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.espacamentoImg} onPress={() => navigation.navigate('Basquete')}>
            <Text style={styles.estiloLetras}>Basquete</Text>
            <ImageBackground source={require('../../assets/basquete.jpg')}style={styles.estiloImg}>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.espacamentoImg} onPress={() => navigation.navigate('Volei')}>
            <Text style={styles.estiloLetras}>Vôlei</Text>
            <ImageBackground source={require('../../assets/volei.jpg')}style={styles.estiloImg}>
            </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
        
    </View>
  );
}

function Futebol({ navigation }) {
  return (
    <WebView 
    source={{uri:'https://vgabriel10.github.io/classificacao-futebol/'}}/>
  );
}

function Basquete({ navigation }) {
  return (
    <WebView 
    source={{uri:'https://vgabriel10.github.io/classificacao-basquete/'}}/>
  
  );
}

function Volei({ navigation }) {
  return (
    <WebView 
    source={{uri:'https://vgabriel10.github.io/classificacao-volei/'}}/>
  
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={Categorias} 
      options={{
        headerShown: false
    }}/>
      <Stack.Screen name="Basquete" component={Basquete} />
      <Stack.Screen name="Futebol" component={Futebol} />
      <Stack.Screen name="Volei" component={Volei} />
    </Stack.Navigator>
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
    estiloImg:{
        width:300,
        height:200,
        resizeMode:"contain",

    },
    estiloLetras:{
        fontSize:18,
        fontWeight:'bold',
        alignItems:'center'
    },
    espacamentoImg:{
        marginTop:20,
    },
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center"
    }
})