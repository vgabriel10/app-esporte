import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground} from 'react-native';

export default function(){
    return(
        <View style={styles.espacamento}>
            <TouchableOpacity style={styles.espacamentoImg}>
            <ImageBackground source={{uri:'https://s2.glbimg.com/qZsRs5BaNhqGwd9ea2dCyGnf80M=/57x0:1177x630/540x304/smart/filters:max_age(3600)/https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/4/B0PyE0eENfaQbSNBw0Lv.jpg'}}style={styles.estiloImg}>

            </ImageBackground>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.espacamentoImg}>
            <ImageBackground source={{uri:'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/04/13/262465799-620acfb21cef9.jpeg'}}style={styles.estiloImg}>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.espacamentoImg}>
            <ImageBackground source={{uri:'https://a.espncdn.com/media/motion/2022/0502/Hu_220502_BR_futebol_europeu_gols_brasileiros_rodada_fds_other/Hu_220502_BR_futebol_europeu_gols_brasileiros_rodada_fds_other.jpg'}}style={styles.estiloImg}>
            </ImageBackground>
        </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    estiloImg:{
        width:300,
        height:200,
        resizeMode:'stretch'

    },
    estiloLetras:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    },
    espacamentoImg:{
        marginTop:20,
    },
    espacamento:{
        flex:8,
    }
});