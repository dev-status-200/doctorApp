import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const ChoosePlan = ({navigation}) => {
  return (
    <View style={{padding:20}}>
        <View style={{marginBottom:"10%"}}>
        <Text style={{color:'white', fontSize:32, fontWeight:'700', marginBottom:'5%', fontFamily:'FontsFree-Net-ProximaNova-Regular'}}>
            {"For Your Healthy & \nBetter Life, \nSubscribe Now"}
        </Text>
        <Text style={{color:'silver', lineHeight:22, fontFamily:'FontsFree-Net-ProximaNova-Regular'}}>
            Lorem ipsum dolor sit amet consectetur. 
            Dictum pellentesque ut proin eget cursus gravida mattis nulla quis.
            Faucibus in mauris malesuada tempus sed ut consectetur.
        </Text>
        <TouchableOpacity style={styles.buttonBase} onPress={()=>navigation.navigate("Dashboard")}>
            <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default ChoosePlan

const styles = StyleSheet.create({
    buttonBase: {
        marginTop:40,   
        width: "100%",
        height: 40,
        backgroundColor: '#D86321',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
      btnText:{
        color:'white',
        fontFamily:'FontsFree-Net-ProximaNova-Regular'
      },
})