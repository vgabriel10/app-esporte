import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import Pesquisa from './src/Componentes/Pesquisa';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Pesquisa/>
    <View style={styles.conteudo}>
    <Text>Reservado para o conteudo</Text>
    </View>
  

    <View style={styles.rodape}>
      <Text>Rodape</Text>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barraPesquisa:{
    flex:1
  },

  conteudo:{
    flex:8
  },
  rodape:{
    flex:1,
    backgroundColor:'grey',
    width:'100%'
  }

});
