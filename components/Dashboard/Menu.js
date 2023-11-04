import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';

const Menu = () => {
  return (
    <View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/one.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>Dentist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/two.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/three.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>Nutrition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/four.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>Online Visit</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/five.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>Neurologist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/six.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>Opthalogist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/seven.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>Pediatrician</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <Image source={require('../../assets/menu/eight.png')} style={{height:"100%", width:"100%"}} />
                </View>
                <Text style={styles.label}>More</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default React.memo(Menu)

const styles = StyleSheet.create({
    label:{
        textAlign:'center',
        color:'black',
    },
    icons:{
        color:'#D86321',
        fontSize:25
    },
    iconContainer:{
        height:60, 
        width:60
    },
    btnContainer:{
        justifyContent:'center', 
        alignItems:'center', 
        alignContent:"center",
        width:"30%"
    }
})