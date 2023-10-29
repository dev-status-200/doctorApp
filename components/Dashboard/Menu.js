import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"

const Menu = () => {
  return (
    <View>

        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
                </View>
                <Text style={styles.label}>Dentist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
                </View>
                <Text style={styles.label}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
                </View>
                <Text style={styles.label}>Nutrition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
                </View>
                <Text style={styles.label}>Online Visit</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
                </View>
                <Text style={styles.label}>Neurologist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
                </View>
                <Text style={styles.label}>Opthalogist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
                </View>
                <Text style={styles.label}>Pediatrician</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome6 name={'house-medical-circle-check'} style={styles.icons} />
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
        backgroundColor:'#dcdfe0', 
        padding:15, 
        borderRadius:100, 
        height:60, 
        width:60
    },
    btnContainer:{
        justifyContent:'center', 
        alignItems:'center', 
        alignContent:"center"
    }
})