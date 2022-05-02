import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default function(){
    return(
        <View>
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
        width:40,
        height:40,
        resizeMode:'contain',
        marginLeft:5,
        marginTop:10,
    },
    estiloLetras:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
    }
});