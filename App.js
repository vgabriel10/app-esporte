import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Routes from './src/routes';
import BarraSuperior from './src/Componentes/BarraSuperior';
import BarraInferior from './src/Componentes/BarraInferior'; 
import Conteudo from './src/Componentes/Conteudo';
import Home from './src/Views/Home'
import Aovivo from './src/Views/Aovivo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Group
      screenOptions={{ headerStyle: { backgroundColor: 'green'} }}>
        
        <Stack.Screen name="Home" component={Home} options={{title:'Esportes'}}/>
        <Stack.Screen name="Ao Vivo" component={Aovivo} options={{ title: 'Esportes' }} />
      </Stack.Group>
      
      
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
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
  barraInicial:{
    title:'Esportes',
    flexDirection:'row',
    marginTop:20,
    backgroundColor:'green',
    width:'100%',
    height:'5%',
    flex:1,
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
  }

});

