
import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import ButtonLupa from './ButtonLupa';


export default function App() {
    return (
      <View style={styles.barraInicial}>
        
        <Text style={styles.letras}>
            Esportes</Text>
        <ButtonLupa/>
    
      </View>
      
    );
  }

  const styles = StyleSheet.create({
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
    }
  });