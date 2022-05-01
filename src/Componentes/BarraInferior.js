import { SafeAreaView, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

import ButtonHome from './ButtonHome';

export default function(){
    return(
        <View style={styles.barraInferior}>
            <ButtonHome/>

        </View>
    );
}

const styles = StyleSheet.create({
    barraInferior:{
        flexDirection:'row',
        backgroundColor:'#1C1C1C',
        width:'100%',
        height:'5%',
        flex:1,
    }
});