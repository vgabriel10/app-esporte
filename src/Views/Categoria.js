import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react'
export default function(){
    return(
        <View style={styles.container}>
            <Text style={styles.letras}>Categoria</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    letras:{
        fontSize:30
    }
})