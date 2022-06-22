import React from "react";
import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default function(){
    return(
        <View style={styles.espacamento}>
            <TouchableOpacity>
            <Image source={require('../../assets/categoria.png')}
            style={styles.estiloBotao}/>
            <Text style={styles.estiloLetras}>Categoria</Text>
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
        fontWeight:'bold',
        color:'#fff'
    },
    espacamento:{
        flexGrow:1,
    }
});