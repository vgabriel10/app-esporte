import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground} from 'react-native';

export default function(){
    return(
        <View style={styles.espacamento}>
            <TouchableOpacity>
            <ImageBackground source={{uri:'https://s2.glbimg.com/qZsRs5BaNhqGwd9ea2dCyGnf80M=/57x0:1177x630/540x304/smart/filters:max_age(3600)/https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/4/B0PyE0eENfaQbSNBw0Lv.jpg'}}>

            </ImageBackground>
            
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
        flex:8,
    }
});