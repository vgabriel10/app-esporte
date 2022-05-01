import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

export default function(){
    return(
        <View style={styles.barraInferior}>

        </View>
    );
}

const styles = StyleSheet.create({
    barraInferior:{
        flexDirection:'row',
        backgroundColor:'green',
        width:'100%',
        height:'5%',
        flex:1,
    }
});