import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default function(){
    return(
        <View>
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
        marginLeft:150,
        marginTop:10
    }
});