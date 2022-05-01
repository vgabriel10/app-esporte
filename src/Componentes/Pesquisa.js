
import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';



export default function App() {
    return (
      <View style={styles.barraInicial}>

        <Text style={styles.letras}>
            Esportes</Text>
            <TouchableOpacity>
                <Image source={require('../../assets/lupa-branca-48.png')}
                style={styles.estiloBotao}/>
            </TouchableOpacity>
    
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    barraInicial:{
        flexDirection:'row',
        marginTop:25,
        backgroundColor:'green',
        width:'100%',
        height:'5%',
        flex:1,
    },
    letras:{
        color:'#fff',
        fontSize:40,
        fontWeight:'bold',
    },
    estiloBotao:{
        width:40,
        height:40,
        resizeMode:'contain',
        marginLeft:150,
        marginTop:10
    }

  });