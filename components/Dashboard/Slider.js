import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const Slider = () => {

    //const image = {uri: };
    
  return (
    <View>
    <ImageBackground source={require('../../assets/menu/book.png')} resizeMode="cover" style={{height:150}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', padding:15}}>
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
    </ImageBackground>
    </View>
  )
}

export default React.memo(Slider)

const styles = StyleSheet.create({
    transBtn:{
        color:'white',
        marginBottom:15,
        borderWidth:1,
        borderColor:'white',
        textAlign:'center',
        width:'50%',
        padding:5,
        borderRadius:7
    }
})

/*
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
    */