import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Slider = () => {
    
  return (
    <View style={styles.barContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{width:'70%'}}>
                <Text style={{color:'white', fontSize:18, fontWeight:'600'}}>Medical Checks!</Text>
                <Text style={{color:'white', marginBottom:10, marginTop:7}}>
                    {"Check your health condition regularly to minimize the incidence of disease in the future..."}
                </Text>
                <TouchableOpacity>
                    <Text style={styles.transBtn}>BOOK NOW</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:"30%"}}>

            </View>
        </View>
    </View>
  )
}

export default React.memo(Slider)

const styles = StyleSheet.create({
    barContainer:{
        backgroundColor:'#36454F',
        borderRadius:15,
        paddingLeft:20,
        paddingRight:10,
        paddingTop:20,
    },
    transBtn:{
        color:'white',
        marginBottom:15,
        borderWidth:1,
        borderColor:'white',
        textAlign:'center',
        width:'60%',
        padding:10,
        borderRadius:7
    }
})