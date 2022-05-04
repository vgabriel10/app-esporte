import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';

export default function(){
    return(
        <WebView source={{uri:'https://reactnative.dev/'}}
        />
    );
}

const styles = StyleSheet.create({
    conteudo:{
      flex:8
    }
  
  });
  