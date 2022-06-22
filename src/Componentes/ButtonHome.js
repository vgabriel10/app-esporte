import React from "react";
import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';



export default function(){
    return(
        <View style={styles.espacamento}>
        <TouchableOpacity>
            <Image source={require('../../assets/home-branco-48.png')}
            style={styles.estiloBotao}/>
            <Text style={styles.estiloLetras}>Inicio</Text>
        </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    estiloBotao:{
        width:35,
        height:35,
        marginLeft:12,
        marginTop:10,
        flexDirection:'row',
    },
    estiloLetras:{
        fontSize:18,
        marginLeft:10,
        fontWeight:'bold',
        color:'#fff'
    },
    espacamento:{
        flexGrow:1,
    }
});