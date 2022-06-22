import React from "react";
import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default function(){
    return(
        <View style={styles.espacamento}>
        <TouchableOpacity>
            <Image source={require('../../assets/lupa-branca-48.png')}
            style={styles.estiloBotao}/>
        </TouchableOpacity></View>
    );
}


const styles = StyleSheet.create({
    estiloBotao:{
        width:40,
        height:40,
        resizeMode:'contain',
        marginTop:10,    
    },
    espacamento:{
        flexDirection:'row',
        justifyContent:'flex-end',
        flexGrow:8
    }
});