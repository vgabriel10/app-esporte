import React from 'react'
import Home from './Views/Home'
import Aovivo from './Views/Aovivo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Categoria from './Views/Categoria';
import Menu from './Views/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
            headerShown:true,
        }}>
            <Tab.Screen name="Inicio" component={Home} options={{tabBarIcon:({color, size})=> (
                <Ionicons name='home-outline' color={color} size={size} />
            )}}/>
            <Tab.Screen name='Aovivo' component={Aovivo} options={{tabBarIcon:({color, size})=> (
                <Ionicons name='play' color={color} size={size} />
            )}}/>
            <Tab.Screen name='Categoria' component={Categoria}  options={{tabBarIcon:({color, size})=> (
                <Feather name='grid' color={color} size={size} />
            )}}/>
            <Tab.Screen name='Menu' component={Menu} options={{tabBarIcon:({color, size})=> (
                <Ionicons name='menu-sharp' color={color} size={size} />
            )}}/>
        </Tab.Navigator>
    )
}