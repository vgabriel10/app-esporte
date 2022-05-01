import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';



export default function(){
    return(
        <View>
        <TouchableOpacity>
            <Image source={require('../../assets/home-branco-48.png')}
            style={styles.estiloBotao}/>
            <Text style={styles.estiloLetras}>Inicio</Text>
        </TouchableOpacity></View>

    );
}

const styles = StyleSheet.create({
    estiloBotao:{
        width:40,
        height:40,
        resizeMode:'contain',
        marginLeft:5,
        marginTop:10
    },
    estiloLetras:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }
});